// Kiểm repo Giấy lặng, không cần cài gì: node scripts/check.mjs
// - rubric.yaml khớp các mục ### 3.x của principles.md (số lượng, thứ tự, tên), id không trùng.
// - MANIFEST.yaml trỏ tới file hay thư mục có thật.
// - Văn ngoài khối mã không có mã màu hex (mã màu là lựa chọn của sản phẩm).
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), "utf8");
const problems = [];

const manifest = read("MANIFEST.yaml");
if (!/^version:\s*1\s*$/m.test(manifest)) problems.push("MANIFEST.yaml phải có version: 1.");
const paths = [...manifest.matchAll(/^ {2}([a-z_]+):\s*(\S+)\s*$/gm)].map(([, name, path]) => ({ name, path }));
for (const { name, path } of paths) {
  if (!existsSync(join(root, path))) problems.push(`MANIFEST.yaml: ${name} trỏ tới ${path}, không có.`);
}
const rubricPath = paths.find((entry) => entry.name === "rubric")?.path;
const principlesPath = paths.find((entry) => entry.name === "principles")?.path;
if (!rubricPath || !principlesPath) problems.push("MANIFEST.yaml cần tên logic rubric và principles.");

if (rubricPath && principlesPath) {
  const rubric = read(rubricPath);
  if (!/^version:\s*1\s*$/m.test(rubric)) problems.push("rubric.yaml phải có version: 1.");
  const ids = [...rubric.matchAll(/^ {2}- id:\s*(\S+)\s*$/gm)].map((match) => match[1]);
  const names = [...rubric.matchAll(/^ {4}name:\s*(.+?)\s*$/gm)].map((match) => match[1]);
  const checks = [...rubric.matchAll(/^ {4}check:\s*(.+?)\s*$/gm)].map((match) => match[1]);
  if (ids.length === 0) problems.push("rubric.yaml không có nguyên tắc nào.");
  if (names.length !== ids.length || checks.length !== ids.length) {
    problems.push("Mỗi nguyên tắc trong rubric.yaml cần đủ id, name, check.");
  }
  if (new Set(ids).size !== ids.length) problems.push("rubric.yaml có id trùng.");
  const headings = [...read(principlesPath).matchAll(/^### 3\.\d+ (.+?)\s*$/gm)].map((match) => match[1]);
  if (headings.join("|") !== names.join("|")) {
    problems.push(`Tên trong rubric.yaml lệch mục 3.x của principles.md:\n  rubric: ${names.join(" · ")}\n  principles: ${headings.join(" · ")}`);
  }
}

function markdownFiles(dir) {
  return readdirSync(join(root, dir)).flatMap((entry) => {
    const path = dir ? `${dir}/${entry}` : entry;
    if (entry.startsWith(".") || entry === "node_modules") return [];
    if (statSync(join(root, path)).isDirectory()) return markdownFiles(path);
    return path.endsWith(".md") || path.endsWith(".yaml") ? [path] : [];
  });
}
for (const file of markdownFiles("")) {
  const prose = read(file).replace(/```[\s\S]*?```/g, "");
  const hex = prose.match(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/);
  if (hex) problems.push(`${file}: có mã màu ${hex[0]} ngoài khối mã.`);
}

if (problems.length) {
  console.error(problems.map((problem) => `- ${problem}`).join("\n"));
  process.exit(1);
}
console.log("OK");
