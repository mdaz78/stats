import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("data/football.csv");

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = MatchReader.fromCSV("data/football.csv");
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReports()
// );

// summary.buildAndPrintReport(matchReader.matches);

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new HTMLReports("reports/report.html")
// );

const htmlSummary = Summary.winsAnalysisWithHTMLReport(
  "Man United",
  "reports/report.html"
);

const consoleSummary = Summary.winsAnalysisConsoleReport("Man United");

htmlSummary.buildAndPrintReport(matchReader.matches);
consoleSummary.buildAndPrintReport(matchReader.matches);
