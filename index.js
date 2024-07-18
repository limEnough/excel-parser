const xlsx = require('xlsx');
const fs = require('fs');

function excelToJson(excelFilePath, jsonFilePath) {
    // Excel 파일 읽기
    const workbook = xlsx.readFile(excelFilePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // 시트의 데이터를 JSON으로 변환
    const jsonData = xlsx.utils.sheet_to_json(worksheet, { defval: '' }); // 빈 셀은 빈 문자열

    // JSON 데이터를 파일로 저장
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf-8');

    console.log(`Excel 파일이 JSON 파일로 성공적으로 변환되었습니다: ${jsonFilePath}`);
}

// 사용 예제
const excelFilePath = 'input/global-sample.xlsx';  // 변환할 Excel 파일 경로
const jsonFilePath = 'output/global-sample.json';  // 저장할 JSON 파일 경로

excelToJson(excelFilePath, jsonFilePath);