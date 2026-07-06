import { execFileSync } from 'node:child_process';
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { extname, join } from 'node:path';
import { tmpdir } from 'node:os';

const projectRoot = process.cwd();
const currentDistDir = join(projectRoot, 'dist');
const currentOutputPath = join(projectRoot, 'playroom_studio_landing_v2.html');
const mainOutputPath = join(projectRoot, 'playroom_studio_landing_v1.html');

const mimeTypes = {
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

function readDistAsset(distDir, assetPath) {
  const normalizedPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return readFileSync(join(distDir, normalizedPath));
}

function toDataUri(distDir, assetPath) {
  const ext = extname(assetPath).toLowerCase();
  const mime = mimeTypes[ext];

  if (!mime) {
    throw new Error(`Unsupported asset type for standalone export: ${assetPath}`);
  }

  const data = readDistAsset(distDir, assetPath).toString('base64');
  return `data:${mime};base64,${data}`;
}

function exportStandalone(distDir, outputPath) {
  let html = readFileSync(join(distDir, 'index.html'), 'utf8');

  html = html.replace(
    /<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)">/g,
    (_, href) => `<style>\n${readDistAsset(distDir, href).toString('utf8')}\n</style>`,
  );

  html = html.replace(
    /<script type="module" src="(\/_astro\/[^"]+\.js)"><\/script>/g,
    (_, src) => `<script type="module">\n${readDistAsset(distDir, src).toString('utf8')}\n</script>`,
  );

  html = html.replace(
    /(src|href)="(\/_astro\/[^"]+)"/g,
    (_, attribute, assetPath) => `${attribute}="${toDataUri(distDir, assetPath)}"`,
  );

  writeFileSync(outputPath, html);
  console.log(`Created ${outputPath}`);
}

function buildMainBranch() {
  const worktreePath = mkdtempSync(join(tmpdir(), 'lend-main-export-'));

  try {
    execFileSync('git', ['worktree', 'add', '--detach', worktreePath, 'main'], {
      cwd: projectRoot,
      stdio: 'ignore',
    });

    symlinkSync(join(projectRoot, 'node_modules'), join(worktreePath, 'node_modules'), 'dir');

    execFileSync('npm', ['run', 'build'], {
      cwd: worktreePath,
      stdio: 'inherit',
    });

    exportStandalone(join(worktreePath, 'dist'), mainOutputPath);
  } finally {
    rmSync(join(worktreePath, 'dist'), { recursive: true, force: true });
    rmSync(join(worktreePath, '.astro'), { recursive: true, force: true });
    rmSync(join(worktreePath, 'node-compile-cache'), { recursive: true, force: true });
    rmSync(join(worktreePath, 'node_modules'), { force: true });

    if (existsSync(worktreePath)) {
      execFileSync('git', ['worktree', 'remove', worktreePath], {
        cwd: projectRoot,
        stdio: 'ignore',
      });
    }
  }
}

exportStandalone(currentDistDir, currentOutputPath);
buildMainBranch();
