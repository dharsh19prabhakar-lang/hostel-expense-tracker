// // // const express = require('express');
// // // const cors = require('cors');
// // // const sql = require('mssql');

// // // const app = express();
// // // app.use(cors());
// // // app.use(express.json());

// // // // Database configuration
// // // const dbConfig = {
// // //     user: 'sa', 
// // //     password: '123456', 
// // //     server: 'localhost',
// // //     database: 'HostelExpenses', 
// // //     options: {
// // //         encrypt: false, 
// // //         trustServerCertificate: true 
// // //     }
// // // };

// // // const poolPromise = new sql.ConnectionPool(dbConfig)
// // //     .connect()
// // //     .then(pool => {
// // //         console.log('✅ Connected to SQL Database Successfully.');
// // //         return pool;
// // //     })
// // //     .catch(err => {
// // //         console.error('❌ Database Connection Failed:', err.message);
// // //         process.exit(1);
// // //     });

// // // // ============= MEMBERS API =============

// // // // GET all members
// // // app.get('/api/members', async (req, res) => {
// // //     try {
// // //         const pool = await poolPromise;
// // //         const result = await pool.request().query('SELECT MemberId, Name FROM Members ORDER BY Name');
// // //         res.json(result.recordset);
// // //     } catch (err) {
// // //         console.error("Error fetching members:", err.message);
// // //         res.status(500).json({ error: err.message });
// // //     }
// // // });

// // // // ADD member
// // // app.post('/api/members', async (req, res) => {
// // //     try {
// // //         const pool = await poolPromise;
// // //         await pool.request()
// // //             .input('Name', sql.VarChar, req.body.name)
// // //             .query('INSERT INTO Members (Name) VALUES (@Name)');
// // //         res.status(201).json({ message: 'Member added successfully' });
// // //     } catch (err) {
// // //         console.error("Error adding member:", err);
// // //         res.status(500).json({ error: err.message });
// // //     }
// // // });

// // // // DELETE member
// // // app.delete('/api/members/:id', async (req, res) => {
// // //     try {
// // //         const pool = await poolPromise;
// // //         const memberId = parseInt(req.params.id);
// // //         await pool.request().input('MemberId', sql.Int, memberId).query('DELETE FROM ExpenseSplits WHERE MemberId = @MemberId');
// // //         await pool.request().input('MemberId', sql.Int, memberId).query('DELETE FROM Expenses WHERE PayerId = @MemberId');
// // //         await pool.request().input('MemberId', sql.Int, memberId).query('DELETE FROM Members WHERE MemberId = @MemberId');
// // //         res.json({ message: 'Member deleted successfully' });
// // //     } catch (err) {
// // //         console.error("Error deleting member:", err);
// // //         res.status(500).json({ error: err.message });
// // //     }
// // // });

// // // // ============= EXPENSES API =============

// // // // GET all expenses with date
// // // app.get('/api/expenses', async (req, res) => {
// // //     try {
// // //         const pool = await poolPromise;
// // //         const query = `
// // //             SELECT 
// // //                 e.ExpenseId, 
// // //                 e.Description, 
// // //                 e.Amount, 
// // //                 e.Category,
// // //                 FORMAT(e.Date, 'yyyy-MM-dd') AS Date,
// // //                 p.Name AS Payer,
// // //                 STRING_AGG(m.Name, ', ') AS SplitWithNames
// // //             FROM Expenses e
// // //             JOIN Members p ON e.PayerId = p.MemberId
// // //             LEFT JOIN ExpenseSplits s ON e.ExpenseId = s.ExpenseId
// // //             LEFT JOIN Members m ON s.MemberId = m.MemberId
// // //             GROUP BY e.ExpenseId, e.Description, e.Amount, e.Category, p.Name, e.Date, e.CreatedAt
// // //             ORDER BY e.Date DESC, e.CreatedAt DESC
// // //         `;
        
// // //         const result = await pool.request().query(query);
// // //         const mappedData = result.recordset.map(row => ({
// // //             ExpenseId: row.ExpenseId,
// // //             Description: row.Description,
// // //             Amount: parseFloat(row.Amount),
// // //             Payer: row.Payer,
// // //             Category: row.Category,
// // //             Date: row.Date || null,
// // //             SplitWith: row.SplitWithNames ? row.SplitWithNames.split(', ') : []
// // //         }));
// // //         res.json(mappedData);
// // //     } catch (err) {
// // //         console.error("Error fetching expenses:", err.message);
// // //         res.status(500).json({ error: err.message });
// // //     }
// // // });

// // // // ADD expense with date
// // // app.post('/api/expenses', async (req, res) => {
// // //     const { description, amount, payerId, category, splitMemberIds, date } = req.body;
// // //     try {
// // //         const pool = await poolPromise;
// // //         const inserted = await pool.request()
// // //             .input('Description', sql.VarChar, description)
// // //             .input('Amount', sql.Decimal(10, 2), amount)
// // //             .input('PayerId', sql.Int, payerId)
// // //             .input('Category', sql.VarChar, category)
// // //             .input('Date', sql.Date, date || new Date().toISOString().split('T')[0])
// // //             .query(`INSERT INTO Expenses (Description, Amount, PayerId, Category, Date) 
// // //                     OUTPUT INSERTED.ExpenseId 
// // //                     VALUES (@Description, @Amount, @PayerId, @Category, @Date)`);
        
// // //         const newExpenseId = inserted.recordset[0].ExpenseId;

// // //         for (let memberId of splitMemberIds) {
// // //             await pool.request()
// // //                 .input('ExpenseId', sql.Int, newExpenseId)
// // //                 .input('MemberId', sql.Int, memberId)
// // //                 .query('INSERT INTO ExpenseSplits (ExpenseId, MemberId) VALUES (@ExpenseId, @MemberId)');
// // //         }
// // //         res.status(201).json({ message: 'Expense added successfully' });
// // //     } catch (err) {
// // //         console.error("Error adding expense:", err);
// // //         res.status(500).json({ error: err.message });
// // //     }
// // // });

// // // // UPDATE expense with date
// // // app.put('/api/expenses/:id', async (req, res) => {
// // //     const targetId = parseInt(req.params.id);
// // //     const { description, amount, payerId, category, splitMemberIds, date } = req.body;

// // //     try {
// // //         const pool = await poolPromise;
// // //         await pool.request()
// // //             .input('ExpId', sql.Int, targetId)
// // //             .input('Desc', sql.VarChar, description)
// // //             .input('Amt', sql.Decimal(10, 2), amount)
// // //             .input('PayId', sql.Int, payerId)
// // //             .input('Cat', sql.VarChar, category)
// // //             .input('Date', sql.Date, date || new Date().toISOString().split('T')[0])
// // //             .query(`UPDATE Expenses 
// // //                     SET Description = @Desc, Amount = @Amt, PayerId = @PayId, Category = @Cat, Date = @Date 
// // //                     WHERE ExpenseId = @ExpId`);

// // //         await pool.request().input('ExpId', sql.Int, targetId).query('DELETE FROM ExpenseSplits WHERE ExpenseId = @ExpId');

// // //         if (splitMemberIds && Array.isArray(splitMemberIds)) {
// // //             for (let memberId of splitMemberIds) {
// // //                 await pool.request()
// // //                     .input('ExpId', sql.Int, targetId)
// // //                     .input('MemId', sql.Int, memberId)
// // //                     .query('INSERT INTO ExpenseSplits (ExpenseId, MemberId) VALUES (@ExpId, @MemId)');
// // //             }
// // //         }
// // //         res.json({ success: true, message: 'Expense updated successfully' });
// // //     } catch (err) {
// // //         console.error("Update error:", err);
// // //         res.status(500).json({ error: err.message });
// // //     }
// // // });

// // // // DELETE expense
// // // app.delete('/api/expenses/:id', async (req, res) => {
// // //     const targetId = parseInt(req.params.id);
// // //     try {
// // //         const pool = await poolPromise;
// // //         await pool.request().input('IdParam', sql.Int, targetId).query('DELETE FROM ExpenseSplits WHERE ExpenseId = @IdParam');
// // //         await pool.request().input('IdParam', sql.Int, targetId).query('DELETE FROM Expenses WHERE ExpenseId = @IdParam');
// // //         res.json({ success: true, message: 'Expense deleted successfully' });
// // //     } catch (err) {
// // //         console.error("Delete error:", err);
// // //         res.status(500).json({ error: err.message });
// // //     }
// // // });

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));


// // const express = require('express');
// // const cors = require('cors');
// // const { createClient } = require('@supabase/supabase-js');
// // require('dotenv').config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // const supabase = createClient(
// //   process.env.SUPABASE_URL,
// //   process.env.SUPABASE_KEY
// // );

// // // ── MEMBERS ──────────────────────────────────────

// // app.get('/api/members', async (req, res) => {
// //   const { data, error } = await supabase
// //     .from('members')
// //     .select('id, name')
// //     .order('name');
// //   if (error) return res.status(500).json({ error: error.message });
// //   // match your existing shape: MemberId, Name
// //   res.json(data.map(m => ({ MemberId: m.id, Name: m.name })));
// // });

// // app.post('/api/members', async (req, res) => {
// //   const { error } = await supabase
// //     .from('members')
// //     .insert({ name: req.body.name });
// //   if (error) return res.status(500).json({ error: error.message });
// //   res.status(201).json({ message: 'Member added' });
// // });

// // app.delete('/api/members/:id', async (req, res) => {
// //   const { error } = await supabase
// //     .from('members')
// //     .delete()
// //     .eq('id', req.params.id);
// //   if (error) return res.status(500).json({ error: error.message });
// //   res.json({ message: 'Member deleted' });
// // });

// // // ── EXPENSES ─────────────────────────────────────

// // app.get('/api/expenses', async (req, res) => {
// //   const { data, error } = await supabase
// //     .from('expenses')
// //     .select(`
// //       id, description, amount, category, date,
// //       payer:members!expenses_payer_id_fkey(id, name),
// //       expense_splits(member:members(id, name))
// //     `)
// //     .order('date', { ascending: false })
// //     .order('created_at', { ascending: false });

// //   if (error) return res.status(500).json({ error: error.message });

// //   // Map to your existing frontend shape
// //   const mapped = data.map(e => ({
// //     ExpenseId: e.id,
// //     Description: e.description,
// //     Amount: parseFloat(e.amount),
// //     Category: e.category,
// //     Date: e.date,
// //     Payer: e.payer?.name,
// //     SplitWith: e.expense_splits?.map(s => s.member?.name) || []
// //   }));

// //   res.json(mapped);
// // });

// // app.post('/api/expenses', async (req, res) => {
// //   const { description, amount, payerId, category, splitMemberIds, date } = req.body;

// //   const { data: exp, error } = await supabase
// //     .from('expenses')
// //     .insert({ description, amount, payer_id: payerId, category, date })
// //     .select()
// //     .single();

// //   if (error) return res.status(500).json({ error: error.message });

// //   const splits = splitMemberIds.map(memberId => ({
// //     expense_id: exp.id,
// //     member_id: memberId
// //   }));

// //   const { error: splitError } = await supabase
// //     .from('expense_splits')
// //     .insert(splits);

// //   if (splitError) return res.status(500).json({ error: splitError.message });
// //   res.status(201).json({ message: 'Expense added' });
// // });

// // app.put('/api/expenses/:id', async (req, res) => {
// //   const { description, amount, payerId, category, splitMemberIds, date } = req.body;
// //   const id = req.params.id;

// //   const { error } = await supabase
// //     .from('expenses')
// //     .update({ description, amount, payer_id: payerId, category, date })
// //     .eq('id', id);

// //   if (error) return res.status(500).json({ error: error.message });

// //   // Delete old splits and re-insert
// //   await supabase.from('expense_splits').delete().eq('expense_id', id);

// //   const splits = splitMemberIds.map(memberId => ({
// //     expense_id: parseInt(id),
// //     member_id: memberId
// //   }));

// //   const { error: splitError } = await supabase
// //     .from('expense_splits')
// //     .insert(splits);

// //   if (splitError) return res.status(500).json({ error: splitError.message });
// //   res.json({ message: 'Expense updated' });
// // });

// // app.delete('/api/expenses/:id', async (req, res) => {
// //   const { error } = await supabase
// //     .from('expenses')
// //     .delete()
// //     .eq('id', req.params.id);
// //   if (error) return res.status(500).json({ error: error.message });
// //   res.json({ message: 'Expense deleted' });
// // });

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// const express = require('express');
// const cors = require('cors');
// const { createClient } = require('@supabase/supabase-js');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Supabase connection
// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );

// // ─── TEST ROUTE ──────────────────────────────────────
// app.get('/api/test', (req, res) => {
//   res.json({ message: 'Backend is working with Supabase! 🎉' });
// });

// // ─── MEMBERS API ──────────────────────────────────────

// app.get('/api/members', async (req, res) => {
//   const { data, error } = await supabase
//     .from('members')
//     .select('id, name')
//     .order('name');
//   if (error) return res.status(500).json({ error: error.message });
//   res.json(data.map(m => ({ MemberId: m.id, Name: m.name })));
// });

// app.post('/api/members', async (req, res) => {
//   const { error } = await supabase
//     .from('members')
//     .insert({ name: req.body.name });
//   if (error) return res.status(500).json({ error: error.message });
//   res.status(201).json({ message: 'Member added' });
// });

// app.delete('/api/members/:id', async (req, res) => {
//   const { error } = await supabase
//     .from('members')
//     .delete()
//     .eq('id', req.params.id);
//   if (error) return res.status(500).json({ error: error.message });
//   res.json({ message: 'Member deleted' });
// });

// // ─── EXPENSES API ──────────────────────────────────────

// app.get('/api/expenses', async (req, res) => {
//   const { data, error } = await supabase
//     .from('expenses')
//     .select(`
//       id, description, amount, category, date,
//       payer:members!expenses_payer_id_fkey(id, name),
//       expense_splits(member:members(id, name))
//     `)
//     .order('date', { ascending: false })
//     .order('created_at', { ascending: false });

//   if (error) return res.status(500).json({ error: error.message });

//   const mapped = data.map(e => ({
//     ExpenseId: e.id,
//     Description: e.description,
//     Amount: parseFloat(e.amount),
//     Category: e.category,
//     Date: e.date,
//     Payer: e.payer?.name,
//     SplitWith: e.expense_splits?.map(s => s.member?.name) || []
//   }));

//   res.json(mapped);
// });

// app.post('/api/expenses', async (req, res) => {
//   const { description, amount, payerId, category, splitMemberIds, date } = req.body;

//   const { data: exp, error } = await supabase
//     .from('expenses')
//     .insert({ description, amount, payer_id: payerId, category, date })
//     .select()
//     .single();

//   if (error) return res.status(500).json({ error: error.message });

//   const splits = splitMemberIds.map(memberId => ({
//     expense_id: exp.id,
//     member_id: memberId
//   }));

//   const { error: splitError } = await supabase
//     .from('expense_splits')
//     .insert(splits);

//   if (splitError) return res.status(500).json({ error: splitError.message });
//   res.status(201).json({ message: 'Expense added' });
// });

// app.put('/api/expenses/:id', async (req, res) => {
//   const { description, amount, payerId, category, splitMemberIds, date } = req.body;
//   const id = req.params.id;

//   const { error } = await supabase
//     .from('expenses')
//     .update({ description, amount, payer_id: payerId, category, date })
//     .eq('id', id);

//   if (error) return res.status(500).json({ error: error.message });

//   await supabase.from('expense_splits').delete().eq('expense_id', id);

//   const splits = splitMemberIds.map(memberId => ({
//     expense_id: parseInt(id),
//     member_id: memberId
//   }));

//   const { error: splitError } = await supabase
//     .from('expense_splits')
//     .insert(splits);

//   if (splitError) return res.status(500).json({ error: splitError.message });
//   res.json({ message: 'Expense updated' });
// });

// app.delete('/api/expenses/:id', async (req, res) => {
//   const { error } = await supabase
//     .from('expenses')
//     .delete()
//     .eq('id', req.params.id);
//   if (error) return res.status(500).json({ error: error.message });
//   res.json({ message: 'Expense deleted' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ─── Supabase Connection ──────────────────────────────────────
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// ─── Test Route ──────────────────────────────────────────────
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working! 🎉' });
});

// ─── MEMBERS API ──────────────────────────────────────────────

app.get('/api/members', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('id, name')
      .order('name');

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: error.message });
    }

    // Map to frontend expected format
    const mapped = data.map(m => ({ 
      MemberId: m.id, 
      Name: m.name 
    }));
    
    res.json(mapped);
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/members', async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const { data, error } = await supabase
      .from('members')
      .insert({ name: name.trim() })
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ 
      message: 'Member added successfully',
      member: data[0]
    });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/members/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('members')
      .delete()
      .eq('id', parseInt(id));

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: error.message });
    }

    res.json({ message: 'Member deleted successfully' });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ─── EXPENSES API ──────────────────────────────────────────────

app.get('/api/expenses', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('expenses')
      .select(`
        id, description, amount, category, date,
        payer:members!expenses_payer_id_fkey(id, name),
        expense_splits(member:members(id, name))
      `)
      .order('date', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: error.message });
    }

    const mapped = data.map(e => ({
      ExpenseId: e.id,
      Description: e.description,
      Amount: parseFloat(e.amount),
      Category: e.category,
      Date: e.date,
      Payer: e.payer?.name || null,
      SplitWith: e.expense_splits?.map(s => s.member?.name).filter(Boolean) || []
    }));

    res.json(mapped);
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/expenses', async (req, res) => {
  try {
    const { description, amount, payerId, category, splitMemberIds, date } = req.body;

    // Insert expense
    const { data: exp, error: expError } = await supabase
      .from('expenses')
      .insert({
        description,
        amount,
        payer_id: payerId,
        category,
        date
      })
      .select()
      .single();

    if (expError) {
      console.error('Supabase error:', expError);
      return res.status(500).json({ error: expError.message });
    }

    // Insert splits
    if (splitMemberIds && splitMemberIds.length > 0) {
      const splits = splitMemberIds.map(memberId => ({
        expense_id: exp.id,
        member_id: memberId
      }));

      const { error: splitError } = await supabase
        .from('expense_splits')
        .insert(splits);

      if (splitError) {
        console.error('Split error:', splitError);
        return res.status(500).json({ error: splitError.message });
      }
    }

    res.status(201).json({ message: 'Expense added successfully' });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/expenses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description, amount, payerId, category, splitMemberIds, date } = req.body;

    // Update expense
    const { error: updateError } = await supabase
      .from('expenses')
      .update({ description, amount, payer_id: payerId, category, date })
      .eq('id', parseInt(id));

    if (updateError) {
      console.error('Update error:', updateError);
      return res.status(500).json({ error: updateError.message });
    }

    // Delete old splits
    await supabase
      .from('expense_splits')
      .delete()
      .eq('expense_id', parseInt(id));

    // Insert new splits
    if (splitMemberIds && splitMemberIds.length > 0) {
      const splits = splitMemberIds.map(memberId => ({
        expense_id: parseInt(id),
        member_id: memberId
      }));

      const { error: splitError } = await supabase
        .from('expense_splits')
        .insert(splits);

      if (splitError) {
        console.error('Split error:', splitError);
        return res.status(500).json({ error: splitError.message });
      }
    }

    res.json({ message: 'Expense updated successfully' });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/expenses/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Delete splits first
    await supabase
      .from('expense_splits')
      .delete()
      .eq('expense_id', parseInt(id));

    // Delete expense
    const { error } = await supabase
      .from('expenses')
      .delete()
      .eq('id', parseInt(id));

    if (error) {
      console.error('Delete error:', error);
      return res.status(500).json({ error: error.message });
    }

    res.json({ message: 'Expense deleted successfully' });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));