import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dbPath = path.join(process.cwd(), 'db.json');
  const rawdata = fs.readFileSync(dbPath, 'utf8');
  const employee = JSON.parse(rawdata);

  let results = employee.data;

  const { name, start_age, end_age } = req.query;

  if (name) {
    results = results.filter(e =>
      e.employee_name.includes(name)
    );
  }

  if (start_age && end_age) {
    results = results.filter(e =>
      parseInt(e.employee_age) > parseInt(start_age) &&
      parseInt(e.employee_age) < parseInt(end_age)
    );
  }

  res.status(200).json({ employees: results });
}
