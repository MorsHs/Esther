import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLocation } from 'react-router-dom';

function ChildRecords() {
  const location = useLocation();
  const record = location.state?.record;

  if (!record) {
    return <div>No record selected</div>;
  }

  const childProfile = ["Name", "Sex", "Date of Birth", "Barangay", "Current Age"];
  const childProfileData = [
    record.child?.name || 'N/A',
    record.child?.gender || 'N/A',
    record.child?.dateOfBirth || 'N/A',
    record.child?.barangayName || 'N/A',
    record.evaluation?.ageAnchorMonths || 'N/A'
  ];

  const childMonthlyMonitoring = record.monitoringHistory?.sequence?.map(item => [
    item.month,
    item.ageInMonths,
    item.heightCm,
    item.weightForAge,
    item.heightForAge,
    item.weightForLengthHeight
  ]) || [];

  return (
    <div className="flex justify-center py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Child Profile Card */}
          <Box component="section">
            <Card>
              <CardHeader title="Child Profile" />
              <CardContent className="px-6 py-4">
                {childProfile.map((label, index) => (
                  <div key={label} className="grid grid-cols-[140px_1fr] py-2">
                    <div className="text-sm text-gray-600">{label}</div>
                    <div className="text-sm text-gray-900">{childProfileData[index]}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Box>

          {/* Monthly Monitoring Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={6} className="text-xl font-medium text-gray-800">
                    Monthly Monitoring
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Month</TableCell>
                  <TableCell>Age (months)</TableCell>
                  <TableCell>Height (cm)</TableCell>
                  <TableCell>WFA</TableCell>
                  <TableCell>HFA</TableCell>
                  <TableCell>WFLH</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {childMonthlyMonitoring.map((row, index) => (
                  <TableRow key={index}>
                    {row.map((cell, idx) => (
                      <TableCell key={idx}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="lg:col-span-1 flex flex-col justify-between">
          <SummaryCard record={record} />
        </div>
      </div>
    </div>
  );
}

export default ChildRecords;

function SummaryCard({ record }) {
  const evaluation = record.evaluation || {};
  const growthPatternSummary = record.growthPatternSummary || {};

  return (
    <Box component="section" className="h-full">
      <Card className="flex flex-col justify-between h-full">
        <CardHeader title="Evaluation Summary" />
        <CardContent className="space-y-3 px-6 py-4 flex flex-col justify-between h-full">
          <div className="space-y-3">
            <div className="text-sm text-gray-700">
              Current Condition: <span className="text-green-600 font-medium">{evaluation.trendConclusion || 'N/A'}</span>
            </div>
            <div className="text-sm text-gray-700">
              Trend Conclusion: <span className="font-medium">{evaluation.trendConclusion || 'N/A'}</span>
            </div>
            <div className="text-sm text-gray-700">
              Evaluation Period: <span className="font-medium">{evaluation.evaluationWindowMonths ? `Last ${evaluation.evaluationWindowMonths} months` : 'N/A'}</span>
            </div>
            <div className="text-sm text-gray-700">
              Age Reference: <span className="font-medium">{evaluation.ageAnchorMonths ? `${evaluation.ageAnchorMonths} months` : 'N/A'}</span>
            </div>
            <div className="text-sm text-green-600">
              Estimated Concern: {evaluation.estimatedConditionTimeRange || 'N/A'}
            </div>

            <hr className="my-2" />

            <p className="text-sm text-gray-600 leading-relaxed">
              {evaluation.summary || 'No summary available.'}
            </p>

            <hr className="my-2" />

            <div className="text-xs text-gray-500 space-y-1">
              <div>WFA = Weight-for-Age: {growthPatternSummary.weightForAge?.trendPattern || 'N/A'}</div>
              <div>HFA = Height-for-Age: {growthPatternSummary.heightForAge?.trendPattern || 'N/A'}</div>
              <div>WFLH = Weight-for-Length/Height: {growthPatternSummary.weightForLengthHeight?.trendPattern || 'N/A'}</div>
              <div>N = Normal</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}
