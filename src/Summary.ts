import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { ConsoleReports } from "./reportTargets/ConsoleReports";
import { HTMLReports } from "./reportTargets/HTMLReports";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }

  buildAndPrintReport(matchData: MatchData[]) {
    const report = this.analyzer.run(matchData);
    this.outputTarget.print(report);
  }

  static winsAnalysisWithHTMLReport(team: string, filepath: string): Summary {
    return new Summary(new WinsAnalysis(team), new HTMLReports(filepath));
  }

  static winsAnalysisConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReports());
  }
}
