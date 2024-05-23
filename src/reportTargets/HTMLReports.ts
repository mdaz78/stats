import fs from "fs";
import { OutputTarget } from "../Summary";

export class HTMLReports implements OutputTarget {
  constructor(public filepath: string) {}

  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync(this.filepath, html);
  }
}
