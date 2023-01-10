function main() {
  const container = document.querySelector("#novel_honbun");
  if (!container) return;

  // 段落末尾に句点を追加
  for (const p of [...container.querySelectorAll("p")]) {
    const t = p.textContent;
    if (t.length && !t.match(/[。」？！―　]$/)) {
      p.append("。");
    }
  }
}
main();
