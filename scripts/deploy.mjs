import * as ftp from 'basic-ftp';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.deploy
const envPath = join(__dirname, '../.env.deploy');
if (!existsSync(envPath)) {
  console.error('✗ .env.deploy not found');
  process.exit(1);
}
const env = Object.fromEntries(
  readFileSync(envPath, 'utf-8')
    .split('\n')
    .filter(l => l.includes('='))
    .map(l => l.trim().split('='))
);

const LOCAL_DIR  = join(__dirname, '../dist/albakore-site/browser');
const REMOTE_DIR = env.FTP_REMOTE_DIR;

const client = new ftp.Client();
client.ftp.verbose = false;

async function deploy() {
  try {
    console.log(`→ Connecting to ${env.FTP_HOST}...`);
    await client.access({
      host:            env.FTP_HOST,
      user:            env.FTP_USER,
      password:        env.FTP_PASS,
      secure:          true,
      secureOptions:   { rejectUnauthorized: false },
    });

    console.log(`→ Uploading to ${REMOTE_DIR}...`);
    await client.ensureDir(REMOTE_DIR);
    await client.clearWorkingDir();

    client.trackProgress(info => {
      process.stdout.write(`\r  ${info.name} — ${info.bytes} bytes`);
    });

    await client.uploadFromDir(LOCAL_DIR);
    client.trackProgress();

    console.log('\n✓ Deploy complete');
  } catch (err) {
    console.error('\n✗ Deploy failed:', err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
