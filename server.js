const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// 配置中间件
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '.')));

// 连接数据库
const db = new sqlite3.Database('./test_results.db', (err) => {
  if (err) {
    console.error('数据库连接失败:', err.message);
  } else {
    console.log('数据库连接成功');
    // 创建表
    db.run(`CREATE TABLE IF NOT EXISTS results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type_code TEXT,
      type_name TEXT,
      answers TEXT,
      scores TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

// 提交测评结果
app.post('/api/submit', (req, res) => {
  const { type_code, type_name, answers, scores } = req.body;
  
  db.run(
    'INSERT INTO results (type_code, type_name, answers, scores) VALUES (?, ?, ?, ?)',
    [type_code, type_name, JSON.stringify(answers), JSON.stringify(scores)],
    function(err) {
      if (err) {
        console.error('插入数据失败:', err.message);
        res.status(500).json({ success: false, message: '提交失败' });
      } else {
        res.json({ success: true, message: '提交成功', id: this.lastID });
      }
    }
  );
});

// 获取所有测评结果
app.get('/api/results', (req, res) => {
  db.all('SELECT * FROM results ORDER BY created_at DESC', (err, rows) => {
    if (err) {
      console.error('查询数据失败:', err.message);
      res.status(500).json({ success: false, message: '查询失败' });
    } else {
      // 解析JSON字段
      const results = rows.map(row => ({
        ...row,
        answers: JSON.parse(row.answers),
        scores: JSON.parse(row.scores)
      }));
      res.json({ success: true, data: results });
    }
  });
});

// 获取单个测评结果
app.get('/api/results/:id', (req, res) => {
  db.get('SELECT * FROM results WHERE id = ?', [req.params.id], (err, row) => {
    if (err) {
      console.error('查询数据失败:', err.message);
      res.status(500).json({ success: false, message: '查询失败' });
    } else if (!row) {
      res.status(404).json({ success: false, message: '记录不存在' });
    } else {
      row.answers = JSON.parse(row.answers);
      row.scores = JSON.parse(row.scores);
      res.json({ success: true, data: row });
    }
  });
});

// 删除测评结果
app.delete('/api/results/:id', (req, res) => {
  db.run('DELETE FROM results WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      console.error('删除数据失败:', err.message);
      res.status(500).json({ success: false, message: '删除失败' });
    } else if (this.changes === 0) {
      res.status(404).json({ success: false, message: '记录不存在' });
    } else {
      res.json({ success: true, message: '删除成功' });
    }
  });
});

// 统计数据
app.get('/api/stats', (req, res) => {
  db.all('SELECT type_name, COUNT(*) as count FROM results GROUP BY type_name', (err, rows) => {
    if (err) {
      console.error('统计失败:', err.message);
      res.status(500).json({ success: false, message: '统计失败' });
    } else {
      res.json({ success: true, data: rows });
    }
  });
});

// 后台管理页面
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});