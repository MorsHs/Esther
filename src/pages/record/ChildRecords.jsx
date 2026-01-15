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

function ChildRecords() {
  const childProfile = ["Name", "Sex", "Date of Birth", "Barangay", "Current Age"];
  const childProfileData = ["John Doe", "Male", "2018-05-15", "Barangay 1", "5"];

  const childMonthlyMonitoring = [
    ["August", "32", "85.2", "N", "N", "N"],
    ["September", "32", "85.2", "N", "N", "N"],
    ["October", "32", "85.2", "N", "N", "N"],
    ["November", "32", "85.2", "N", "N", "N"],
    ["December", "32", "85.2", "N", "N", "N"],
  ];

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
          <SummaryCard />
        </div>
      </div>
    </div>
  );
}

export default ChildRecords;

function SummaryCard() {
  return (
    <Box component="section" className="h-full">
      <Card className="flex flex-col justify-between h-full">
        <CardHeader title="Evaluation Summary" />
        <CardContent className="space-y-3 px-6 py-4 flex flex-col justify-between h-full">
          <div className="space-y-3">
            <div className="text-sm text-gray-700">
              Current Condition: <span className="text-green-600 font-medium">Normal</span>
            </div>
            <div className="text-sm text-gray-700">
              Trend Conclusion: <span className="font-medium">Persist</span>
            </div>
            <div className="text-sm text-gray-700">
              Evaluation Period: <span className="font-medium">Last 5 months</span>
            </div>
            <div className="text-sm text-gray-700">
              Age Reference: <span className="font-medium">36 months</span>
            </div>
            <div className="text-sm text-green-600">
              Estimated Concern: No concern expected within next 6 months
            </div>

            <hr className="my-2" />

            <p className="text-sm text-gray-600 leading-relaxed">
              The child is currently in normal nutritional condition. Based on growth
              patterns observed over the past five months and interpreted at the
              child's current age of 36 months, measurements remain within the
              normal range with no indication of nutritional deterioration.
            </p>

            <hr className="my-2" />

            <div className="text-xs text-gray-500 space-y-1">
              <div>WFA = Weight-for-Age</div>
              <div>HFA = Height-for-Age</div>
              <div>WFLH = Weight-for-Length/Height</div>
              <div>N = Normal</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}
