import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { HTMLReports } from "./reportTargets/HTMLReports";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("data/football.csv");

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReports()
// );

// summary.buildAndPrintReport(matchReader.matches);

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new HTMLReports("reports/report.html")
);

summary.buildAndPrintReport(matchReader.matches);
