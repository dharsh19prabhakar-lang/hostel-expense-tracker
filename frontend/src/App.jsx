// // import { useState, useEffect } from 'react';
// // import { 
// //   Container, Tabs, Tab, Box, Typography, Card, CardContent, Grid, 
// //   Button, TextField, Select, MenuItem, InputLabel, FormControl, 
// //   FormGroup, FormControlLabel, Checkbox, Table, TableBody, TableCell, 
// //   TableHead, TableRow, Paper, Chip, IconButton, Avatar, Divider,
// //   Fade, Zoom, Grow, Slide, alpha, Stack, Badge,
// //   Tooltip, Alert, Snackbar, CircularProgress, 
// // } from '@mui/material';
// // import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import dayjs from 'dayjs';
// // import GroupAddIcon from '@mui/icons-material/GroupAdd';
// // import ReceiptIcon from '@mui/icons-material/Receipt';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditIcon from '@mui/icons-material/Edit';
// // import SaveIcon from '@mui/icons-material/Save';
// // import CancelIcon from '@mui/icons-material/Cancel';
// // import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// // import TrendingDownIcon from '@mui/icons-material/TrendingDown';
// // import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// // import HomeIcon from '@mui/icons-material/Home';
// // import CategoryIcon from '@mui/icons-material/Category';
// // import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import FastfoodIcon from '@mui/icons-material/Fastfood';
// // import TrainIcon from '@mui/icons-material/Train';
// // import WeekendIcon from '@mui/icons-material/Weekend';
// // import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// // import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// // import PeopleIcon from '@mui/icons-material/People';
// // import StarsIcon from '@mui/icons-material/Stars';
// // import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// // import AnalyticsIcon from '@mui/icons-material/Analytics';
// // import FileDownloadIcon from '@mui/icons-material/FileDownload';
// // import SearchIcon from '@mui/icons-material/Search';
// // import ClearIcon from '@mui/icons-material/Clear';
// // import PersonIcon from '@mui/icons-material/Person';
// // import axios from 'axios';

// // // Color Palette
// // const colors = {
// //   primary: '#6366f1',
// //   primaryNeon: '#a855f7',
// //   secondary: '#ec4899',
// //   secondaryNeon: '#f43f5e',
// //   success: '#10b981',
// //   successNeon: '#06b6d4',
// //   warning: '#f59e0b',
// //   error: '#ef4444',
// //   info: '#3b82f6',
// //   purple: '#8b5cf6',
// //   orange: '#f97316',
// //   teal: '#14b8a6',
// //   cyan: '#06b6d4',
// //   pink: '#d946ef',
// //   background: '#0f172a',
// //   backgroundLight: '#1e293b',
// //   cardBg: 'rgba(30, 41, 59, 0.8)',
// //   textPrimary: '#f1f5f9',
// //   textSecondary: '#94a3b8',
// //   glassBorder: 'rgba(255,255,255,0.1)',
// //   glassBg: 'rgba(83, 57, 57, 0.05)',
// // };

// // // Different colors for each member
// // const memberColors = {
// //   0: '#64748b', 1: '#fda4af', 2: '#fbbf24', 3: '#024532', 4: '#737373',
// //   5: '#78716c', 6: '#0ea5e9', 7: '#8b5cf6', 8: '#84cc16', 9: '#c026d3',
// //   10: '#2563eb', 11: '#0f766e', 12: '#fb923c', 13: '#818cf8', 14: '#eab308',
// // };

// // const getMemberColor = (name) => {
// //   if (!name) return colors.primary;
// //   let hash = 0;
// //   for (let i = 0; i < name.length; i++) {
// //     hash = (hash + name.charCodeAt(i)) % Object.keys(memberColors).length;
// //   }
// //   return memberColors[hash];
// // };

// // // Category display names
// // const categoryDisplay = {
// //   food: 'Food & Dining 🍔',
// //   grocery: 'Groceries 🥕',
// //   transport: 'Transport 🚌',
// //   accommodation: 'Accommodation 🏠',
// //   entertainment: 'Entertainment 🎬',
// // };

// // export default function App() {
// //   const [activeTab, setActiveTab] = useState(0);
// //   const [members, setMembers] = useState([]);
// //   const [expenses, setExpenses] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  
// //   // Analytics Filters
// //   const [startDate, setStartDate] = useState(dayjs().startOf('month'));
// //   const [endDate, setEndDate] = useState(dayjs());
// //   const [selectedCategory, setSelectedCategory] = useState('all');
// //   const [viewType, setViewType] = useState('daily');
// //   const [selectedDetailMember, setSelectedDetailMember] = useState('all');
  
// //   const [newMember, setNewMember] = useState('');
// //   const [desc, setDesc] = useState('');
// //   const [amount, setAmount] = useState('');
// //   const [payer, setPayer] = useState('');
// //   const [category, setCategory] = useState('food');
// //   const [expenseDate, setExpenseDate] = useState(dayjs());
// //   const [selectedSplits, setSelectedSplits] = useState({});

// //   const [editingExpenseId, setEditingExpenseId] = useState(null);
// //   const [editDesc, setEditDesc] = useState('');
// //   const [editAmount, setEditAmount] = useState('');
// //   const [editPayerId, setEditPayerId] = useState('');
// //   const [editCategory, setEditCategory] = useState('food');
// //   const [editExpenseDate, setEditExpenseDate] = useState(dayjs());
// //   const [editSelectedSplits, setEditSelectedSplits] = useState({});

// //   const showNotification = (message, severity = 'success') => {
// //     setSnackbar({ open: true, message, severity });
// //   };

// //   useEffect(() => {
// //     async function loadData() {
// //       setLoading(true);
// //       try {
// //         const memRes = await axios.get('http://localhost:5000/api/members');
// //         const expRes = await axios.get('http://localhost:5000/api/expenses');
// //         setMembers(memRes.data);
// //         setExpenses(expRes.data);

// //         const defaultChecks = {};
// //         memRes.data.forEach(m => { defaultChecks[m.MemberId] = true; });
// //         setSelectedSplits(defaultChecks);
// //       } catch (err) {
// //         console.error("Initialization Failed:", err);
// //         showNotification("Failed to load data", "error");
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //     loadData();
// //   }, []);

// //   const refreshData = async () => {
// //     try {
// //       const memRes = await axios.get('http://localhost:5000/api/members');
// //       const expRes = await axios.get('http://localhost:5000/api/expenses');
// //       setMembers(memRes.data);
// //       setExpenses(expRes.data);
// //     } catch (err) {
// //       console.error("Error refreshing components:", err);
// //       showNotification("Failed to refresh data", "error");
// //     }
// //   };

// //   // Calculate each member's share for an expense with "owes to" information
// //   const calculateMemberShares = (expense) => {
// //     const shares = {};
// //     const splitWith = expense.SplitWith || [];
// //     const payer = expense.Payer;
// //     const totalAmount = expense.Amount;
// //     const numberOfPeople = splitWith.length;
    
// //     if (numberOfPeople > 0) {
// //       const sharePerPerson = totalAmount / numberOfPeople;
      
// //       splitWith.forEach(person => {
// //         if (person === payer) {
// //           shares[person] = {
// //             amount: sharePerPerson,
// //             role: 'paid',
// //             status: 'Paid',
// //             owesTo: null,
// //             message: `${person} paid ₹${totalAmount.toFixed(2)} and their share is ₹${sharePerPerson.toFixed(2)}`
// //           };
// //         } else {
// //           shares[person] = {
// //             amount: sharePerPerson,
// //             role: 'owes',
// //             status: 'Owes',
// //             owesTo: payer,
// //             message: `${person} owes ₹${sharePerPerson.toFixed(2)} to ${payer}`
// //           };
// //         }
// //       });
// //     }
    
// //     return shares;
// //   };

// //   // Filter expenses by date range and category
// //   const filteredExpenses = expenses.filter(exp => {
// //     if (!exp.Date) return false;
// //     const expDate = dayjs(exp.Date);
// //     const afterStart = !startDate || expDate.isAfter(startDate.subtract(1, 'day'));
// //     const beforeEnd = !endDate || expDate.isBefore(endDate.add(1, 'day'));
// //     const categoryMatch = selectedCategory === 'all' || exp.Category === selectedCategory;
// //     return afterStart && beforeEnd && categoryMatch;
// //   });

// //   // Calculate member's share in each expense
// //   const getMemberExpenseDetails = (memberName) => {
// //     const details = [];
    
// //     expenses.forEach(expense => {
// //       const splitWith = expense.SplitWith || [];
// //       const payer = expense.Payer;
// //       const amount = expense.Amount;
// //       const numberOfPeople = splitWith.length;
      
// //       if (splitWith.includes(memberName) || payer === memberName) {
// //         let shareAmount = 0;
// //         let memberRole = '';
        
// //         if (payer === memberName) {
// //           if (numberOfPeople > 0) {
// //             shareAmount = amount / numberOfPeople;
// //           }
// //           memberRole = 'paid';
// //         } else if (splitWith.includes(memberName)) {
// //           shareAmount = amount / numberOfPeople;
// //           memberRole = 'owes';
// //         }
        
// //         details.push({
// //           expenseId: expense.ExpenseId,
// //           date: expense.Date,
// //           description: expense.Description,
// //           totalAmount: amount,
// //           paidBy: payer,
// //           memberShare: shareAmount,
// //           role: memberRole,
// //           category: expense.Category,
// //           splitWith: splitWith,
// //         });
// //       }
// //     });
    
// //     return details;
// //   };

// //   // Calculate total owed and total paid for a member
// //   const getMemberTotals = (memberName) => {
// //     const details = getMemberExpenseDetails(memberName);
// //     let totalPaid = 0;
// //     let totalOwed = 0;
// //     let totalShouldPay = 0;
    
// //     details.forEach(detail => {
// //       if (detail.role === 'paid') {
// //         totalPaid += detail.totalAmount;
// //         totalShouldPay += detail.memberShare;
// //       } else if (detail.role === 'owes') {
// //         totalOwed += detail.memberShare;
// //         totalShouldPay += detail.memberShare;
// //       }
// //     });
    
// //     const netBalance = totalPaid - totalShouldPay;
    
// //     return {
// //       totalPaid,
// //       totalOwed,
// //       totalShouldPay,
// //       netBalance,
// //       details,
// //     };
// //   };

// //   // Group expenses by view type
// //   const getGroupedExpenses = () => {
// //     const groups = {};
    
// //     filteredExpenses.forEach(exp => {
// //       let groupKey;
// //       const date = dayjs(exp.Date);
      
// //       if (viewType === 'daily') {
// //         groupKey = date.format('YYYY-MM-DD');
// //       } else if (viewType === 'weekly') {
// //         groupKey = `${date.year()}-W${date.week()}`;
// //       } else {
// //         groupKey = date.format('YYYY-MM');
// //       }
      
// //       if (!groups[groupKey]) {
// //         groups[groupKey] = { total: 0, items: [], date: date };
// //       }
// //       groups[groupKey].total += exp.Amount;
// //       groups[groupKey].items.push(exp);
// //     });
    
// //     return Object.entries(groups)
// //       .sort((a, b) => a[1].date.isBefore(b[1].date) ? -1 : 1)
// //       .map(([key, value]) => ({ key, ...value }));
// //   };

// //   const groupedExpenses = getGroupedExpenses();

// //   // Category-wise summary
// //   const categorySummary = filteredExpenses.reduce((acc, exp) => {
// //     const cat = exp.Category;
// //     if (!acc[cat]) acc[cat] = { total: 0, count: 0 };
// //     acc[cat].total += exp.Amount;
// //     acc[cat].count += 1;
// //     return acc;
// //   }, {});

// //   // Member summary
// //   const memberSummary = filteredExpenses.reduce((acc, exp) => {
// //     const member = exp.Payer;
// //     if (!acc[member]) acc[member] = { total: 0, count: 0 };
// //     acc[member].total += exp.Amount;
// //     acc[member].count += 1;
// //     return acc;
// //   }, {});

// //   const totalFilteredAmount = filteredExpenses.reduce((sum, e) => sum + e.Amount, 0);

// //   // Export to CSV
// //   const exportToCSV = () => {
// //     const headers = ['Date', 'Description', 'Amount', 'Paid By', 'Category', 'Split With'];
// //     const rows = filteredExpenses.map(exp => [
// //       exp.Date,
// //       exp.Description,
// //       exp.Amount,
// //       exp.Payer,
// //       exp.Category,
// //       (exp.SplitWith || []).join(', ')
// //     ]);
    
// //     const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
// //     const blob = new Blob([csvContent], { type: 'text/csv' });
// //     const url = URL.createObjectURL(blob);
// //     const a = document.createElement('a');
// //     a.href = url;
// //     a.download = `expenses_${dayjs().format('YYYY-MM-DD')}.csv`;
// //     a.click();
// //     URL.revokeObjectURL(url);
// //     showNotification('Exported successfully! 📊');
// //   };

// //   const handleAddMember = async () => {
// //     if (!newMember.trim()) return;
// //     try {
// //       await axios.post('http://localhost:5000/api/members', { name: newMember });
// //       setNewMember('');
// //       await refreshData();
// //       showNotification(`${newMember} joined the hostel! 🎉`, "success");
// //     } catch (err) {
// //       console.log(err)
// //       showNotification("Failed to add member", "error");
// //     }
// //   };

// //   const handleDeleteMember = async (id, name) => {
// //     if (!window.confirm(`Remove ${name} from the hostel?`)) return;
// //     try {
// //       await axios.delete(`http://localhost:5000/api/members/${id}`);
// //       await refreshData();
// //       showNotification(`${name} left the hostel 👋`, "info");
// //     } catch (err) {
// //       console.log(err)
// //       showNotification("Failed to delete member", "error");
// //     }
// //   };

// //   const handleAddExpense = async () => {
// //     const splitMemberIds = Object.keys(selectedSplits).filter(id => selectedSplits[id]).map(Number);
// //     if (!desc.trim() || !amount || !payer || splitMemberIds.length === 0) {
// //       showNotification("Please fill all fields and select at least one person to split with", "warning");
// //       return;
// //     }
// //     try {
// //       await axios.post('http://localhost:5000/api/expenses', {
// //         description: desc,
// //         amount: parseFloat(amount),
// //         payerId: parseInt(payer),
// //         category: category,
// //         splitMemberIds: splitMemberIds,
// //         date: expenseDate.format('YYYY-MM-DD')
// //       });
// //       setDesc('');
// //       setAmount('');
// //       setPayer('');
// //       setExpenseDate(dayjs());
// //       await refreshData();
// //       showNotification("Expense added successfully! 💰", "success");
// //     } catch (err) {
// //       console.log(err)
// //       showNotification("Failed to add expense", "error");
// //     }
// //   };

// //   const startEditExpense = (expense) => {
// //     setEditingExpenseId(expense.ExpenseId);
// //     setEditDesc(expense.Description);
// //     setEditAmount(expense.Amount);
// //     setEditCategory(expense.Category);
// //     setEditExpenseDate(expense.Date ? dayjs(expense.Date) : dayjs());

// //     const matchedPayer = members.find(m => m.Name === expense.Payer);
// //     setEditPayerId(matchedPayer ? matchedPayer.MemberId : '');

// //     const splitMap = {};
// //     members.forEach(m => {
// //       splitMap[m.MemberId] = Array.isArray(expense.SplitWith) && expense.SplitWith.includes(m.Name);
// //     });
// //     setEditSelectedSplits(splitMap);
// //   };

// //   const handleSaveEditExpense = async (expenseId) => {
// //     const splitMemberIds = Object.keys(editSelectedSplits).filter(id => editSelectedSplits[id]).map(Number);
// //     if (!editDesc.trim() || !editAmount || !editPayerId || splitMemberIds.length === 0) {
// //       showNotification("Please fill all fields and select at least one person to split with", "warning");
// //       return;
// //     }
// //     try {
// //       await axios.put(`http://localhost:5000/api/expenses/${expenseId}`, {
// //         description: editDesc,
// //         amount: parseFloat(editAmount),
// //         payerId: parseInt(editPayerId),
// //         category: editCategory,
// //         splitMemberIds: splitMemberIds,
// //         date: editExpenseDate.format('YYYY-MM-DD')
// //       });
// //       setEditingExpenseId(null);
// //       await refreshData();
// //       showNotification("Expense updated successfully! ✏️", "success");
// //     } catch (err) {
// //       console.log(err)
// //       showNotification("Failed to update expense", "error");
// //     }
// //   };

// //   const handleDeleteExpense = async (expenseId) => {
// //     if (!window.confirm("Permanently delete this bill?")) return;
// //     try {
// //       await axios.delete(`http://localhost:5000/api/expenses/${expenseId}`);
// //       await refreshData();
// //       showNotification("Expense deleted successfully 🗑️", "success");
// //     } catch (err) {
// //       console.log(err)
// //       showNotification("Failed to delete expense", "error");
// //     }
// //   };

// //   const totalSpent = expenses.reduce((sum, e) => sum + e.Amount, 0);

// //   const computeBalances = () => {
// //     const balances = {};
// //     members.forEach(m => {
// //       balances[m.Name] = { paid: 0, share: 0, net: 0 };
// //     });
// //     expenses.forEach(expense => {
// //       const amount = expense.Amount;
// //       const payer = expense.Payer;
// //       const splitWith = expense.SplitWith || [];
// //       if (balances[payer]) {
// //         balances[payer].paid += amount;
// //       }
// //       const numberOfPeopleSplitting = splitWith.length;
// //       if (numberOfPeopleSplitting > 0) {
// //         const sharePerPerson = amount / numberOfPeopleSplitting;
// //         splitWith.forEach(person => {
// //           if (balances[person]) {
// //             balances[person].share += sharePerPerson;
// //           }
// //         });
// //       }
// //     });
// //     Object.keys(balances).forEach(name => {
// //       balances[name].net = balances[name].paid - balances[name].share;
// //     });
// //     return balances;
// //   };

// //   const memberBalances = computeBalances();

// //   const computeSettlements = () => {
// //     const directTransactions = [];
// //     expenses.forEach(expense => {
// //       const amount = expense.Amount;
// //       const payer = expense.Payer;
// //       const splitWith = expense.SplitWith || [];
// //       const numberOfPeople = splitWith.length;
// //       if (numberOfPeople > 0) {
// //         const sharePerPerson = amount / numberOfPeople;
// //         splitWith.forEach(person => {
// //           if (person !== payer) {
// //             directTransactions.push({ from: person, to: payer, amount: sharePerPerson });
// //           }
// //         });
// //       }
// //     });
// //     const transactionMap = new Map();
// //     directTransactions.forEach(t => {
// //       const key = `${t.from}|${t.to}`;
// //       if (transactionMap.has(key)) {
// //         transactionMap.set(key, transactionMap.get(key) + t.amount);
// //       } else {
// //         transactionMap.set(key, t.amount);
// //       }
// //     });
// //     let transactions = Array.from(transactionMap.entries()).map(([key, amount]) => {
// //       const [from, to] = key.split('|');
// //       return { from, to, amount: Math.round(amount * 100) / 100 };
// //     });
// //     transactions = transactions.filter(t => t.amount > 0.01);
// //     let changed = true;
// //     while (changed) {
// //       changed = false;
// //       for (let i = 0; i < transactions.length; i++) {
// //         for (let j = i + 1; j < transactions.length; j++) {
// //           if (transactions[i].from === transactions[j].to && transactions[i].to === transactions[j].from) {
// //             const amount1 = transactions[i].amount;
// //             const amount2 = transactions[j].amount;
// //             if (amount1 > amount2) {
// //               transactions[i].amount = amount1 - amount2;
// //               transactions.splice(j, 1);
// //             } else if (amount2 > amount1) {
// //               transactions[j].amount = amount2 - amount1;
// //               transactions.splice(i, 1);
// //             } else {
// //               transactions.splice(i, 1);
// //               transactions.splice(j - 1, 1);
// //             }
// //             changed = true;
// //             break;
// //           }
// //         }
// //         if (changed) break;
// //       }
// //     }
// //     transactions = transactions.filter(t => t.amount > 0.01);
// //     transactions.sort((a, b) => b.amount - a.amount);
// //     return transactions;
// //   };

// //   const settlements = computeSettlements();

// //   const getCategoryIcon = (cat) => {
// //     switch(cat) {
// //       case 'food': return <FastfoodIcon sx={{ fontSize: 18, color: 'white !important' }} />;
// //       case 'grocery': return <ShoppingCartIcon sx={{ fontSize: 18, color: 'white !important' }} />;
// //       case 'transport': return <TrainIcon sx={{ fontSize: 18, color: 'white !important' }} />;
// //       case 'accommodation': return <HomeIcon sx={{ fontSize: 18, color: 'white !important' }} />;
// //       case 'entertainment': return <WeekendIcon sx={{ fontSize: 18, color: 'white !important' }} />;
// //       default: return <CategoryIcon sx={{ fontSize: 18, color: 'white !important' }} />;
// //     }
// //   };

// //   const getCategoryGradient = (cat) => {
// //     switch(cat) {
// //       case 'food': return `linear-gradient(135deg, ${colors.orange}, #ea580c)`;
// //       case 'grocery': return `linear-gradient(135deg, ${colors.teal}, #0d9488)`;
// //       case 'transport': return `linear-gradient(135deg, ${colors.info}, #2563eb)`;
// //       case 'accommodation': return `linear-gradient(135deg, ${colors.purple}, #7c3aed)`;
// //       case 'entertainment': return `linear-gradient(135deg, ${colors.pink}, #c026d3)`;
// //       default: return `linear-gradient(135deg, ${colors.primary}, ${colors.primaryNeon})`;
// //     }
// //   };

// //   const getAvatarGradient = (name) => {
// //     const color = getMemberColor(name);
// //     return `linear-gradient(135deg, ${color}, ${color}cc)`;
// //   };

// //   const formatDate = (dateString) => {
// //     if (!dateString) return 'No date';
// //     const date = dayjs(dateString);
// //     return date.isValid() ? date.format('DD MMM YYYY') : 'Invalid date';
// //   };

// //   if (loading) {
// //     return (
// //       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: colors.background }}>
// //         <CircularProgress sx={{ color: colors.primaryNeon }} />
// //       </Box>
// //     );
// //   }

// //   return (
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       <Box sx={{ 
// //         minHeight: '100vh', 
// //         background: `radial-gradient(circle at 0% 0%, ${colors.background} 0%, ${colors.backgroundLight} 100%)`,
// //         position: 'relative',
// //         overflow: 'hidden'
// //       }}>
// //         <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 }}>
// //           <Box sx={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: `radial-gradient(circle, ${alpha(colors.primaryNeon, 0.1)} 0%, transparent 70%)`, borderRadius: '50%', animation: 'float 20s infinite' }} />
// //           <Box sx={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', background: `radial-gradient(circle, ${alpha(colors.secondaryNeon, 0.1)} 0%, transparent 70%)`, borderRadius: '50%', animation: 'float 25s infinite reverse' }} />
// //           <Box sx={{ position: 'absolute', top: '50%', left: '50%', width: '500px', height: '500px', background: `radial-gradient(circle, ${alpha(colors.successNeon, 0.05)} 0%, transparent 70%)`, borderRadius: '50%', transform: 'translate(-50%, -50%)' }} />
// //         </Box>

// //         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 4 }}>
// //           <Slide direction="down" in={true} mountOnEnter unmountOnExit>
// //             <Box sx={{ textAlign: 'center', mb: 5 }}>
// //               <Typography 
// //                 variant="h1" 
// //                 gutterBottom 
// //                 sx={{ 
// //                   fontWeight: 800, 
// //                   background: `linear-gradient(135deg, ${colors.primaryNeon} 0%, ${colors.secondaryNeon} 25%, ${colors.successNeon} 50%, ${colors.teal} 75%, ${colors.purple} 100%)`,
// //                   backgroundClip: 'text',
// //                   WebkitBackgroundClip: 'text',
// //                   color: 'transparent',
// //                   letterSpacing: '-2px',
// //                   textShadow: '0 0 30px rgba(168,85,247,0.3)',
// //                   fontSize: { xs: '2.5rem', md: '4rem' }
// //                 }}
// //               >
// //                 ✨ Hostel Expense Tracker ✨
// //               </Typography>
// //               <Typography variant="h6" sx={{ color: colors.textSecondary, maxWidth: '700px', margin: '0 auto', mt: 2 }}>
// //                 Split bills, track expenses, and settle up with your roommates seamlessly
// //               </Typography>
// //             </Box>
// //           </Slide>

// //           <Paper elevation={0} sx={{ 
// //             mb: 4, 
// //             background: colors.glassBg,
// //             backdropFilter: 'blur(10px)',
// //             borderRadius: 4,
// //             border: `1px solid ${colors.glassBorder}`,
// //             overflow: 'hidden'
// //           }}>
// //             <Tabs value={activeTab} onChange={(e, val) => setActiveTab(val)} centered variant="fullWidth">
// //               <Tab icon={<ReceiptIcon />} iconPosition="start" label="Expenses" sx={{ color: colors.textPrimary, '&.Mui-selected': { color: colors.primaryNeon } }} />
// //               <Tab icon={<AnalyticsIcon />} iconPosition="start" label="Analytics" sx={{ color: colors.textPrimary, '&.Mui-selected': { color: colors.primaryNeon } }} />
// //               <Tab icon={<AccountBalanceWalletIcon />} iconPosition="start" label="Balances" sx={{ color: colors.textPrimary, '&.Mui-selected': { color: colors.primaryNeon } }} />
// //               <Tab icon={<TrendingUpIcon />} iconPosition="start" label="Settle Up" sx={{ color: colors.textPrimary, '&.Mui-selected': { color: colors.primaryNeon } }} />
// //             </Tabs>
// //           </Paper>

// //           {/* Expenses Tab */}
// //           {activeTab === 0 && (
// //             <Fade in={activeTab === 0} timeout={500}>
// //               <Box>
// //                 {/* Members Section */}
// //                 <Zoom in={true} timeout={400}>
// //                   <Card sx={{ 
// //                     mb: 4, 
// //                     borderRadius: 4, 
// //                     background: colors.glassBg,
// //                     backdropFilter: 'blur(10px)',
// //                     border: `1px solid ${colors.glassBorder}`,
// //                     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// //                     '&:hover': { transform: 'translateY(-5px)', boxShadow: `0 20px 40px ${alpha(colors.primaryNeon, 0.2)}` }
// //                   }}>
// //                     <CardContent sx={{ p: 4 }}>
// //                       <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary }}>
// //                         <StarsIcon sx={{ color: colors.primaryNeon }} />
// //                         Roommates
// //                       </Typography>
// //                       <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 3 }}>
// //                         {members.map((m, idx) => (
// //                           <Grow in={true} timeout={idx * 100} key={m.MemberId}>
// //                             <Chip
// //                               avatar={<Avatar sx={{ background: getAvatarGradient(m.Name), width: 32, height: 32, fontWeight: 700, color: '#fff !important' }}>{m.Name[0]}</Avatar>}
// //                               label={m.Name}
// //                               onDelete={() => handleDeleteMember(m.MemberId, m.Name)}
// //                               sx={{ 
// //                                 fontWeight: 600, 
// //                                 color: colors.textPrimary,
// //                                 background: alpha(colors.glassBg, 0.5),
// //                                 border: `1px solid ${colors.glassBorder}`,
// //                                 '&:hover': { transform: 'translateY(-2px)', transition: 'transform 0.2s', background: alpha(colors.primaryNeon, 0.2) }
// //                               }}
// //                             />
// //                           </Grow>
// //                         ))}
// //                       </Box>
// //                       <Divider sx={{ borderColor: colors.glassBorder, my: 2 }} />
// //                       <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
// //                         <TextField 
// //                           size="small" 
// //                           label="Enter name..." 
// //                           value={newMember} 
// //                           onChange={(e) => setNewMember(e.target.value)}
// //                           onKeyPress={(e) => e.key === 'Enter' && handleAddMember()}
// //                           sx={{ 
// //                             flex: 1,
// //                             '& .MuiOutlinedInput-root': { 
// //                               borderRadius: 3,
// //                               color: colors.textPrimary,
// //                               borderColor: colors.glassBorder,
// //                               '& fieldset': { borderColor: colors.glassBorder }
// //                             },
// //                             '& .MuiInputLabel-root': { color: colors.textSecondary }
// //                           }}
// //                         />
// //                         <Button 
// //                           variant="contained" 
// //                           startIcon={<GroupAddIcon />}
// //                           sx={{ 
// //                             background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryNeon})`,
// //                             borderRadius: 3,
// //                             px: 4,
// //                             '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.2s' }
// //                           }}
// //                           onClick={handleAddMember}
// //                         >
// //                           Add Member
// //                         </Button>
// //                       </Box>
// //                     </CardContent>
// //                   </Card>
// //                 </Zoom>

// //                 {/* Add Expense Section */}
// //                 <Zoom in={true} timeout={500}>
// //                   <Card sx={{ 
// //                     mb: 4, 
// //                     borderRadius: 4, 
// //                     background: colors.glassBg,
// //                     backdropFilter: 'blur(10px)',
// //                     border: `1px solid ${colors.glassBorder}`,
// //                     transition: 'transform 0.3s ease',
// //                     '&:hover': { transform: 'translateY(-5px)' }
// //                   }}>
// //                     <CardContent sx={{ p: 4 }}>
// //                       <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary }}>
// //                         <StarsIcon sx={{ color: colors.successNeon }} />
// //                         Log Shared Bill
// //                       </Typography>
// //                       <Grid container spacing={3}>
// //                         <Grid item xs={12} md={4}>
// //                           <TextField fullWidth size="medium" label="Description" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="e.g., Dinner, Groceries, Movie..." sx={{ 
// //                             '& .MuiOutlinedInput-root': { borderRadius: 2, color: colors.textPrimary },
// //                             '& .MuiInputLabel-root': { color: colors.textSecondary }, width: '250px', background: "#ffffff1f", borderRadius: '10px'
// //                           }} />
// //                         </Grid>
// //                         <Grid item xs={12} md={2}>
// //                           <TextField fullWidth size="medium" label="Amount (₹)" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} sx={{ 
// //                             '& .MuiOutlinedInput-root': { borderRadius: 2, color: colors.textPrimary },
// //                             '& .MuiInputLabel-root': { color: colors.textSecondary },
// //                             width: '250px', background: "#ffffff1f", borderRadius: '10px'
// //                           }} />
// //                         </Grid>
// //                         <Grid item xs={12} md={3}>
// //                           <FormControl fullWidth size="medium">
// //                             <InputLabel sx={{ color: colors.textSecondary }}>Paid By</InputLabel>
// //                             <Select label="Paid By" value={payer} onChange={(e) => setPayer(e.target.value)} sx={{ borderRadius: 2, color: colors.textPrimary, width: '250px', background: "#ffffff1f" }}>
// //                               {members.map(m => <MenuItem key={m.MemberId} value={m.MemberId}>{m.Name}</MenuItem>)}
// //                             </Select>
// //                           </FormControl>
// //                         </Grid>
// //                         <Grid item xs={12} md={3}>
// //                           <FormControl fullWidth size="medium">
// //                             <InputLabel sx={{ color: colors.textSecondary }}>Category</InputLabel>
// //                             <Select label="Category" value={category} onChange={(e) => setCategory(e.target.value)} sx={{ borderRadius: 2, color: colors.textPrimary, width: '250px', background: "#ffffff1f" }}>
// //                               <MenuItem value="food"><FastfoodIcon sx={{ mr: 1, fontSize: 18 }} /> Food 🍔</MenuItem>
// //                               <MenuItem value="grocery"><ShoppingCartIcon sx={{ mr: 1, fontSize: 18 }} /> Grocery 🥕</MenuItem>
// //                               <MenuItem value="transport"><TrainIcon sx={{ mr: 1, fontSize: 18 }} /> Transport 🚌</MenuItem>
// //                               <MenuItem value="accommodation"><HomeIcon sx={{ mr: 1, fontSize: 18 }} /> Accommodation 🏠</MenuItem>
// //                               <MenuItem value="entertainment"><WeekendIcon sx={{ mr: 1, fontSize: 18 }} /> Entertainment 🎬</MenuItem>
// //                             </Select>
// //                           </FormControl>
// //                         </Grid>
// //                         <Grid item xs={12} md={12}>
// //                           <DatePicker
// //                             label="Expense Date"
// //                             value={expenseDate}
// //                             onChange={(newDate) => setExpenseDate(newDate)}
// //                             sx={{
// //                               '& .MuiOutlinedInput-root': { 
// //                                 borderRadius: 2,
// //                                 color: 'white',
// //                                 '& fieldset': { borderColor: colors.glassBorder }
// //                               },
// //                               '& .MuiInputLabel-root': { color: colors.textSecondary },
// //                               '& .MuiInputBase-input': { color: 'white' }, width: '250px', background: "#ffffff1f", borderRadius: '10px'
// //                             }}
// //                           />
// //                         </Grid>
// //                         <Grid item xs={12}>
// //                           <Typography variant="subtitle2" sx={{ color: colors.textSecondary, mb: 1.5, fontWeight: 600 }}>Split Between:</Typography>
// //                           <FormGroup row sx={{ gap: 2 }}>
// //                             {members.map(m => (
// //                               <FormControlLabel 
// //                                 key={m.MemberId} 
// //                                 control={
// //                                   <Checkbox 
// //                                     checked={!!selectedSplits[m.MemberId]} 
// //                                     onChange={() => setSelectedSplits(p => ({ ...p, [m.MemberId]: !p[m.MemberId] }))}
// //                                     sx={{ color: colors.primaryNeon, '&.Mui-checked': { color: colors.primaryNeon } }}
// //                                   />
// //                                 } 
// //                                 label={<Typography sx={{ color: colors.textPrimary }}>{m.Name}</Typography>}
// //                               />
// //                             ))}
// //                           </FormGroup>
// //                           <Typography variant="caption" sx={{ color: colors.warning, mb: 1, display: 'block' }}>
// //                             ⚠️ Note: Select ONLY the people who need to pay back (Payer will NOT be included in split)
// //                           </Typography>
// //                         </Grid>
// //                       </Grid>
// //                       <Button 
// //                         variant="contained" 
// //                         sx={{ 
// //                           mt: 3, 
// //                           background: `linear-gradient(135deg, ${colors.success}, ${colors.successNeon})`,
// //                           borderRadius: 3, 
// //                           px: 5, 
// //                           py: 1.2, 
// //                           fontWeight: 700,
// //                           '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.2s' }
// //                         }} 
// //                         startIcon={<ReceiptIcon />} 
// //                         onClick={handleAddExpense}
// //                       >
// //                         Add Expense
// //                       </Button>
// //                     </CardContent>
// //                   </Card>
// //                 </Zoom>

// //                 {/* Stats Cards */}
// //                 <Grid container spacing={3} sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
// //                   <Grid item xs={12} sm={4}>
// //                     <Slide direction="up" in={true} timeout={600}>
// //                       <Paper sx={{ 
// //                         p: 3, 
// //                         textAlign: 'center', 
// //                         borderRadius: 4, 
// //                         background: `linear-gradient(135deg, ${alpha(colors.primary, 0.2)}, ${alpha(colors.primaryNeon, 0.1)})`,
// //                         border: `1px solid ${alpha(colors.primaryNeon, 0.3)}`,
// //                         backdropFilter: 'blur(10px)',
// //                         boxShadow: `0 0 20px ${alpha(colors.primaryNeon, 0.3)}`,
// //                         transition: 'all 0.3s ease',
// //                         '&:hover': { transform: 'translateY(-5px)', boxShadow: `0 0 30px ${alpha(colors.primaryNeon, 0.5)}` },
// //                         width: '300px'
// //                       }}>
// //                         <AttachMoneyIcon sx={{ fontSize: 50, color: colors.primaryNeon, mb: 1 }} />
// //                         <Typography variant="h3" sx={{ fontWeight: 800, color: colors.primaryNeon, mt: 0.5 }}>₹{totalSpent.toFixed(2)}</Typography>
// //                         <Typography variant="caption" sx={{ color: colors.textSecondary, fontWeight: 600, letterSpacing: 1 }}>TOTAL SPENT</Typography>
// //                       </Paper>
// //                     </Slide>
// //                   </Grid>
// //                   <Grid item xs={12} sm={4}>
// //                     <Slide direction="up" in={true} timeout={700}>
// //                       <Paper sx={{ 
// //                         p: 3, 
// //                         textAlign: 'center', 
// //                         borderRadius: 4, 
// //                         background: `linear-gradient(135deg, ${alpha(colors.secondary, 0.2)}, ${alpha(colors.secondaryNeon, 0.1)})`,
// //                         border: `1px solid ${alpha(colors.secondaryNeon, 0.3)}`,
// //                         backdropFilter: 'blur(10px)',
// //                         boxShadow: `0 0 20px ${alpha(colors.secondaryNeon, 0.3)}`,
// //                         transition: 'all 0.3s ease',
// //                         '&:hover': { transform: 'translateY(-5px)', boxShadow: `0 0 30px ${alpha(colors.secondaryNeon, 0.5)}` },
// //                         width: '300px'
// //                       }}>
// //                         <ReceiptIcon sx={{ fontSize: 50, color: colors.secondaryNeon, mb: 1 }} />
// //                         <Typography variant="h3" sx={{ fontWeight: 800, color: colors.secondaryNeon, mt: 0.5 }}>{expenses.length}</Typography>
// //                         <Typography variant="caption" sx={{ color: colors.textSecondary, fontWeight: 600, letterSpacing: 1 }}>EXPENSES LOGGED</Typography>
// //                       </Paper>
// //                     </Slide>
// //                   </Grid>
// //                   <Grid item xs={12} sm={4}>
// //                     <Slide direction="up" in={true} timeout={800}>
// //                       <Paper sx={{ 
// //                         p: 3, 
// //                         textAlign: 'center', 
// //                         borderRadius: 4, 
// //                         background: `linear-gradient(135deg, ${alpha(colors.success, 0.2)}, ${alpha(colors.successNeon, 0.1)})`,
// //                         border: `1px solid ${alpha(colors.successNeon, 0.3)}`,
// //                         backdropFilter: 'blur(10px)',
// //                         boxShadow: `0 0 20px ${alpha(colors.successNeon, 0.3)}`,
// //                         transition: 'all 0.3s ease',
// //                         '&:hover': { transform: 'translateY(-5px)', boxShadow: `0 0 30px ${alpha(colors.successNeon, 0.5)}` },
// //                         width: '300px'
// //                       }}>
// //                         <PeopleIcon sx={{ fontSize: 50, color: colors.successNeon, mb: 1 }} />
// //                         <Typography variant="h3" sx={{ fontWeight: 800, color: colors.successNeon, mt: 0.5 }}>{members.length}</Typography>
// //                         <Typography variant="caption" sx={{ color: colors.textSecondary, fontWeight: 600, letterSpacing: 1 }}>TOTAL MEMBERS</Typography>
// //                       </Paper>
// //                     </Slide>
// //                   </Grid>
// //                 </Grid>

// //                 {/* Expenses Table with Member Share Column */}
// //                 <Paper sx={{ 
// //                   borderRadius: 4, 
// //                   overflow: 'auto', 
// //                   background: colors.glassBg,
// //                   backdropFilter: 'blur(10px)',
// //                   border: `1px solid ${colors.glassBorder}`,
// //                   '& .MuiTableCell-root': { borderColor: colors.glassBorder, color: colors.textPrimary },
// //                 }}>
// //                   <Table sx={{ minWidth: 1200 }}>
// //                     <TableHead sx={{ background: alpha(colors.primaryNeon, 0.1) }}>
// //                       <TableRow>
// //                         <TableCell sx={{ fontWeight: 700, color: colors.textPrimary }}>Date</TableCell>
// //                         <TableCell sx={{ fontWeight: 700, color: colors.textPrimary }}>Description</TableCell>
// //                         <TableCell sx={{ fontWeight: 700, color: colors.textPrimary }}>Amount</TableCell>
// //                         <TableCell sx={{ fontWeight: 700, color: colors.textPrimary }}>Paid By</TableCell>
// //                         <TableCell sx={{ fontWeight: 700, color: colors.textPrimary }}>Category</TableCell>
// //                         <TableCell sx={{ fontWeight: 700, color: colors.textPrimary }}>Split With</TableCell>
// //                         <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, minWidth: 250 }}>Each Member's Share (₹)</TableCell>
// //                         <TableCell align="center" sx={{ fontWeight: 700, color: colors.textPrimary }}>Actions</TableCell>
// //                       </TableRow>
// //                     </TableHead>
// //                     <TableBody>
// //                       {expenses.map((e) => {
// //                         const isEditing = editingExpenseId === e.ExpenseId;
// //                         const memberShares = calculateMemberShares(e);
// //                         return (
// //                           <TableRow key={e.ExpenseId} sx={{ '&:hover': { background: alpha(colors.glassBg, 0.3) } }}>
// //                             {isEditing ? (
// //                               <>
// //                                 <TableCell>
// //                                   <DatePicker
// //                                     value={editExpenseDate}
// //                                     onChange={(newDate) => setEditExpenseDate(newDate)}
// //                                     slotProps={{
// //                                       textField: {
// //                                         size: 'small',
// //                                         sx: { 
// //                                           width: 140,
// //                                           '& .MuiInputBase-input': { color: 'white' }
// //                                         }
// //                                       }
// //                                     }}
// //                                   />
// //                                 </TableCell>
// //                                 <TableCell>
// //                                   <TextField size="small" fullWidth value={editDesc} onChange={(x) => setEditDesc(x.target.value)} />
// //                                 </TableCell>
// //                                 <TableCell>
// //                                   <TextField size="small" type="number" value={editAmount} onChange={(x) => setEditAmount(x.target.value)} sx={{ width: 100 }} />
// //                                 </TableCell>
// //                                 <TableCell>
// //                                   <Select size="small" value={editPayerId} onChange={(x) => setEditPayerId(x.target.value)} sx={{ minWidth: 100 }}>
// //                                     {members.map(m => <MenuItem key={m.MemberId} value={m.MemberId}>{m.Name}</MenuItem>)}
// //                                   </Select>
// //                                 </TableCell>
// //                                 <TableCell>
// //                                   <Select size="small" value={editCategory} onChange={(x) => setEditCategory(x.target.value)}>
// //                                     <MenuItem value="food">Food</MenuItem>
// //                                     <MenuItem value="grocery">Grocery</MenuItem>
// //                                     <MenuItem value="transport">Transport</MenuItem>
// //                                     <MenuItem value="accommodation">Accommodation</MenuItem>
// //                                     <MenuItem value="entertainment">Entertainment</MenuItem>
// //                                   </Select>
// //                                 </TableCell>
// //                                 <TableCell>
// //                                   <Stack direction="row" spacing={1} flexWrap="wrap">
// //                                     {members.map(m => (
// //                                       <FormControlLabel 
// //                                         key={m.MemberId} 
// //                                         control={<Checkbox size="small" checked={!!editSelectedSplits[m.MemberId]} onChange={() => setEditSelectedSplits(p => ({ ...p, [m.MemberId]: !p[m.MemberId] }))} />} 
// //                                         label={m.Name} 
// //                                         sx={{ mr: 1 }}
// //                                       />
// //                                     ))}
// //                                   </Stack>
// //                                 </TableCell>
// //                                 <TableCell colSpan={1}>
// //                                   <Typography variant="caption" color="text.secondary">Will update on save</Typography>
// //                                 </TableCell>
// //                                 <TableCell align="center">
// //                                   <Tooltip title="Save">
// //                                     <IconButton color="success" onClick={() => handleSaveEditExpense(e.ExpenseId)}><SaveIcon /></IconButton>
// //                                   </Tooltip>
// //                                   <Tooltip title="Cancel">
// //                                     <IconButton color="error" onClick={() => setEditingExpenseId(null)}><CancelIcon /></IconButton>
// //                                   </Tooltip>
// //                                 </TableCell>
// //                               </>
// //                             ) : (
// //                               <>
// //                                 <TableCell>
// //                                   <Chip 
// //                                     icon={<CalendarTodayIcon sx={{ fontSize: 14 }} />} 
// //                                     label={formatDate(e.Date)} 
// //                                     size="small" 
// //                                     variant="outlined"
// //                                     sx={{ borderColor: colors.glassBorder, color: colors.textPrimary }}
// //                                   />
// //                                 </TableCell>
// //                                 <TableCell sx={{ fontWeight: 600 }}>{e.Description}</TableCell>
// //                                 <TableCell sx={{ fontWeight: 700, color: colors.successNeon, fontSize: '1rem' }}>₹{e.Amount.toFixed(2)}</TableCell>
// //                                 <TableCell>
// //                                   <Chip 
// //                                     label={e.Payer} 
// //                                     size="small" 
// //                                     sx={{ 
// //                                       background: getMemberColor(e.Payer),
// //                                       color: 'white', 
// //                                       fontWeight: 600 
// //                                     }} 
// //                                   />
// //                                 </TableCell>
// //                                 <TableCell>
// //                                   <Chip 
// //                                     icon={getCategoryIcon(e.Category)} 
// //                                     label={categoryDisplay[e.Category] || e.Category} 
// //                                     size="small" 
// //                                     sx={{ 
// //                                       background: getCategoryGradient(e.Category),
// //                                       color: 'white',
// //                                       fontWeight: 600
// //                                     }} 
// //                                   />
// //                                 </TableCell>
// //                                 <TableCell>
// //                                   <Stack direction="row" spacing={0.5} flexWrap="wrap">
// //                                     {Array.isArray(e.SplitWith) && e.SplitWith.map(name => (
// //                                       <Chip 
// //                                         key={name} 
// //                                         label={name} 
// //                                         size="small" 
// //                                         sx={{ 
// //                                           background: getMemberColor(name),
// //                                           color: 'white',
// //                                           fontWeight: 500
// //                                         }} 
// //                                       />
// //                                     ))}
// //                                   </Stack>
// //                                 </TableCell>
// //                                 <TableCell>
// //                                   <Stack spacing={0.5}>
// //                                     {Object.entries(memberShares).map(([member, shareData]) => (
// //                                       <Tooltip 
// //                                         key={member}
// //                                         title={shareData.message}
// //                                         arrow
// //                                         placement="left"
// //                                       >
// //                                         <Chip
// //                                           size="small"
// //                                           avatar={<Avatar sx={{ bgcolor: getMemberColor(member), width: 24, height: 24, fontSize: '0.7rem' }}>{member[0]}</Avatar>}
// //                                           label={
// //                                             shareData.role === 'paid' 
// //                                               ? `${member}: ₹${shareData.amount.toFixed(2)} ✓ (Paid)`
// //                                               : `${member}: ₹${shareData.amount.toFixed(2)} → owes to ${shareData.owesTo}`
// //                                           }
// //                                           sx={{
// //                                             background: shareData.role === 'paid' ? alpha(colors.successNeon, 0.2) : alpha(colors.warning, 0.2),
// //                                             color: shareData.role === 'paid' ? colors.successNeon : colors.warning,
// //                                             fontWeight: 500,
// //                                             justifyContent: 'flex-start',
// //                                             '& .MuiChip-label': {
// //                                               whiteSpace: 'normal',
// //                                               wordBreak: 'break-word',
// //                                               fontSize: '0.75rem'
// //                                             }
// //                                           }}
// //                                         />
// //                                       </Tooltip>
// //                                     ))}
// //                                   </Stack>
// //                                 </TableCell>
// //                                 <TableCell align="center">
// //                                   <Tooltip title="Edit">
// //                                     <IconButton sx={{ color: colors.primaryNeon }} onClick={() => startEditExpense(e)}><EditIcon /></IconButton>
// //                                   </Tooltip>
// //                                   <Tooltip title="Delete">
// //                                     <IconButton sx={{ color: colors.error }} onClick={() => handleDeleteExpense(e.ExpenseId)}><DeleteIcon /></IconButton>
// //                                   </Tooltip>
// //                                 </TableCell>
// //                               </>
// //                             )}
// //                           </TableRow>
// //                         );
// //                       })}
// //                       {expenses.length === 0 && (
// //                         <TableRow>
// //                           <TableCell colSpan={8} align="center" sx={{ py: 8 }}>
// //                             <EmojiEmotionsIcon sx={{ fontSize: 60, color: colors.textSecondary, mb: 2, opacity: 0.5 }} />
// //                             <Typography variant="h6" color={colors.textSecondary}>No expenses yet. Add your first expense!</Typography>
// //                           </TableCell>
// //                         </TableRow>
// //                       )}
// //                     </TableBody>
// //                   </Table>
// //                 </Paper>
// //               </Box>
// //             </Fade>
// //           )}

// //           {/* Analytics Tab */}
// //           {activeTab === 1 && (
// //             <Fade in={activeTab === 1} timeout={500}>
// //               <Box>
// //                 {/* Filters Card */}
// //                 <Zoom in={true} timeout={400}>
// //                   <Card sx={{ 
// //                     mb: 4, 
// //                     borderRadius: 4, 
// //                     background: colors.glassBg,
// //                     backdropFilter: 'blur(10px)',
// //                     border: `1px solid ${colors.glassBorder}`
// //                   }}>
// //                     <CardContent sx={{ p: 4 }}>
// //                       <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary }}>
// //                         <SearchIcon sx={{ color: colors.primaryNeon }} />
// //                         Filter Expenses
// //                       </Typography>
                      
// //                       <Grid container spacing={3}>
// //                         <Grid item xs={12} md={4}>
// //                           <DatePicker
// //                             label="Start Date"
// //                             value={startDate}
// //                             onChange={(newDate) => setStartDate(newDate)}
// //                             sx={{
// //                               '& .MuiOutlinedInput-root': { 
// //                                 borderRadius: 2,
// //                                 color: 'white',
// //                                 '& fieldset': { borderColor: colors.glassBorder }
// //                               },
// //                               '& .MuiInputLabel-root': { color: colors.textSecondary },
// //                               '& .MuiInputBase-input': { color: 'white' }, width: '250px', background: "#ffffff1f", borderRadius: '10px'
// //                             }}
// //                           />
// //                         </Grid>
// //                         <Grid item xs={12} md={4}>
// //                           <DatePicker
// //                             label="End Date"
// //                             value={endDate}
// //                             onChange={(newDate) => setEndDate(newDate)}
// //                             sx={{ 
// //                               '& .MuiOutlinedInput-root': { 
// //                                 borderRadius: 2,
// //                                 color: 'white',
// //                                 '& fieldset': { borderColor: colors.glassBorder }
// //                               },
// //                               '& .MuiInputLabel-root': { color: colors.textSecondary },
// //                               '& .MuiInputBase-input': { color: 'white' }, width: '250px', background: "#ffffff1f", borderRadius: '10px'
// //                             }}
// //                           />
// //                         </Grid>
// //                         <Grid item xs={12} md={4}>
// //                           <FormControl fullWidth sx={{
// //                               '& .MuiOutlinedInput-root': { 
// //                                 borderRadius: 2,
// //                                 color: 'white',
// //                                 '& fieldset': { borderColor: colors.glassBorder }
// //                               },
// //                               '& .MuiInputLabel-root': { color: colors.textSecondary },
// //                               '& .MuiInputBase-input': { color: 'white' }, width: '150px', background: "#ffffff1f", borderRadius: '10px'}}>
// //                             <InputLabel>Category</InputLabel>
// //                             <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
// //                               <MenuItem value="all">All Categories</MenuItem>
// //                               <MenuItem value="food">Food & Dining 🍔</MenuItem>
// //                               <MenuItem value="grocery">Groceries 🥕</MenuItem>
// //                               <MenuItem value="transport">Transport 🚌</MenuItem>
// //                               <MenuItem value="accommodation">Accommodation 🏠</MenuItem>
// //                               <MenuItem value="entertainment">Entertainment 🎬</MenuItem>
// //                             </Select>
// //                           </FormControl>
// //                         </Grid>
// //                         <Grid item xs={12}>
// //                           <Button 
// //                             fullWidth 
// //                             variant="outlined" 
// //                             startIcon={<ClearIcon />}
// //                             onClick={() => {
// //                               setStartDate(dayjs().startOf('month'));
// //                               setEndDate(dayjs());
// //                               setSelectedCategory('all');
// //                             }}
// //                             sx={{ height: '56px', borderColor: colors.primaryNeon, color: colors.primaryNeon }}
// //                           >
// //                             Clear Filters
// //                           </Button>
// //                         </Grid>
// //                         <Grid item xs={12}>
// //                           <Button 
// //                             fullWidth 
// //                             variant="contained" 
// //                             startIcon={<FileDownloadIcon />}
// //                             onClick={exportToCSV}
// //                             sx={{ height: '56px', background: `linear-gradient(135deg, ${colors.success}, ${colors.successNeon})` }}
// //                           >
// //                             Export CSV
// //                           </Button>
// //                         </Grid>
// //                       </Grid>
// //                     </CardContent>
// //                   </Card>
// //                 </Zoom>

// //                 {/* Summary Stats */}
// //                 <Grid container spacing={3} sx={{ mb: 4 }}>
// //                   <Grid item xs={12} sm={6} md={3}>
// //                     <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 4 }}>
// //                       <Typography variant="body2" color="gray">Total Expenses (Filtered)</Typography>
// //                       <Typography variant="h4" sx={{ color: colors.successNeon, fontWeight: 'bold' }}>₹{totalFilteredAmount.toFixed(2)}</Typography>
// //                     </Paper>
// //                   </Grid>
// //                   <Grid item xs={12} sm={6} md={3}>
// //                     <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 4 }}>
// //                       <Typography variant="body2" color="gray">Number of Transactions</Typography>
// //                       <Typography variant="h4" sx={{ color: colors.primaryNeon, fontWeight: 'bold' }}>{filteredExpenses.length}</Typography>
// //                     </Paper>
// //                   </Grid>
// //                   <Grid item xs={12} sm={6} md={3}>
// //                     <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 4 }}>
// //                       <Typography variant="body2" color="gray">Categories Used</Typography>
// //                       <Typography variant="h4" sx={{ color: colors.warning, fontWeight: 'bold' }}>{Object.keys(categorySummary).length}</Typography>
// //                     </Paper>
// //                   </Grid>
// //                   <Grid item xs={12} sm={6} md={3}>
// //                     <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 4 }}>
// //                       <Typography variant="body2" color="gray">Date Range</Typography>
// //                       <Typography variant="body1" sx={{ color: colors.textPrimary, fontWeight: 'bold' }}>
// //                         {startDate.format('DD MMM')} - {endDate.format('DD MMM YYYY')}
// //                       </Typography>
// //                     </Paper>
// //                   </Grid>
// //                 </Grid>

// //                 {/* Category Summary Table */}
// //                 <Card sx={{ mb: 4, borderRadius: 4, background: '#ffffff15', backdropFilter: 'blur(10px)', border: `1px solid ${colors.glassBorder}` }}>
// //                   <CardContent>
// //                     <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.textPrimary }}>📊 Category-wise Summary</Typography>
// //                     <Table>
// //                       <TableHead>
// //                         <TableRow>
// //                           <TableCell sx={{ fontWeight: 700 }}>Category</TableCell>
// //                           <TableCell sx={{ fontWeight: 700 }}>Number of Expenses</TableCell>
// //                           <TableCell sx={{ fontWeight: 700 }}>Total Amount (₹)</TableCell>
// //                           <TableCell sx={{ fontWeight: 700 }}>Average per Transaction</TableCell>
// //                         </TableRow>
// //                       </TableHead>
// //                       <TableBody>
// //                         {Object.entries(categorySummary).map(([cat, data]) => (
// //                           <TableRow key={cat}>
// //                             <TableCell>
// //                               <Chip icon={getCategoryIcon(cat)} label={categoryDisplay[cat] || cat} size="small" sx={{ background: getCategoryGradient(cat), color: 'white' }} />
// //                             </TableCell>
// //                             <TableCell>{data.count}</TableCell>
// //                             <TableCell sx={{ color: colors.successNeon, fontWeight: 600 }}>₹{data.total.toFixed(2)}</TableCell>
// //                             <TableCell>₹{(data.total / data.count).toFixed(2)}</TableCell>
// //                           </TableRow>
// //                         ))}
// //                       </TableBody>
// //                     </Table>
// //                   </CardContent>
// //                 </Card>

// //                 {/* Member Summary Overview Table */}
// //                 <Card sx={{ mb: 4, borderRadius: 4, background: '#ffffff15', backdropFilter: 'blur(10px)', border: `1px solid ${colors.glassBorder}` }}>
// //                   <CardContent>
// //                     <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.textPrimary }}>👥 Member Summary (Who Paid)</Typography>
// //                     <Table>
// //                       <TableHead>
// //                         <TableRow>
// //                           <TableCell sx={{ fontWeight: 700 }}>Member</TableCell>
// //                           <TableCell sx={{ fontWeight: 700 }}>Number of Payments</TableCell>
// //                           <TableCell sx={{ fontWeight: 700 }}>Total Paid (₹)</TableCell>
// //                           <TableCell sx={{ fontWeight: 700 }}>Average per Payment</TableCell>
// //                           <TableCell sx={{ fontWeight: 700 }}>Action</TableCell>
// //                         </TableRow>
// //                       </TableHead>
// //                       <TableBody>
// //                         {members.map(member => {
// //                           const summary = memberSummary[member.Name] || { total: 0, count: 0 };
// //                           return (
// //                             <TableRow key={member.MemberId}>
// //                               <TableCell>
// //                                 <Avatar sx={{ background: getMemberColor(member.Name), width: 32, height: 32, fontSize: '0.9rem', display: 'inline-flex', mr: 1 }}>{member.Name[0]}</Avatar>
// //                                 {member.Name}
// //                               </TableCell>
// //                               <TableCell>{summary.count}</TableCell>
// //                               <TableCell sx={{ color: colors.successNeon, fontWeight: 600 }}>₹{summary.total.toFixed(2)}</TableCell>
// //                               <TableCell>₹{summary.count > 0 ? (summary.total / summary.count).toFixed(2) : '0'}</TableCell>
// //                               <TableCell>
// //                                 <Button 
// //                                   size="small" 
// //                                   variant="outlined" 
// //                                   startIcon={<PersonIcon />}
// //                                   onClick={() => setSelectedDetailMember(selectedDetailMember === member.Name ? 'all' : member.Name)}
// //                                   sx={{ borderColor: colors.primaryNeon, color: colors.primaryNeon }}
// //                                 >
// //                                   {selectedDetailMember === member.Name ? 'Hide Details' : 'View Details'}
// //                                 </Button>
// //                               </TableCell>
// //                             </TableRow>
// //                           );
// //                         })}
// //                       </TableBody>
// //                     </Table>
// //                   </CardContent>
// //                 </Card>

// //                 {/* Member-wise Detailed View */}
// //                 {selectedDetailMember !== 'all' && (
// //                   <Zoom in={true}>
// //                     <Card sx={{ 
// //                       mb: 4, 
// //                       borderRadius: 4, 
// //                       background: `linear-gradient(135deg, ${alpha(colors.primaryNeon, 0.1)}, ${alpha(colors.secondaryNeon, 0.1)})`,
// //                       backdropFilter: 'blur(10px)',
// //                       border: `2px solid ${colors.primaryNeon}`,
// //                     }}>
// //                       <CardContent sx={{ p: 4 }}>
// //                         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap' }}>
// //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                             <Avatar sx={{ background: getMemberColor(selectedDetailMember), width: 60, height: 60, fontSize: '2rem', fontWeight: 'bold' }}>
// //                               {selectedDetailMember[0]}
// //                             </Avatar>
// //                             <Box>
// //                               <Typography variant="h5" sx={{ fontWeight: 700, color: colors.textPrimary }}>
// //                                 {selectedDetailMember}'s Expense Details
// //                               </Typography>
// //                               <Typography variant="body2" color="text.secondary">
// //                                 All expenses where {selectedDetailMember} was involved
// //                               </Typography>
// //                             </Box>
// //                           </Box>
// //                           <Button 
// //                             variant="contained" 
// //                             startIcon={<ClearIcon />}
// //                             onClick={() => setSelectedDetailMember('all')}
// //                             sx={{ background: colors.error }}
// //                           >
// //                             Close
// //                           </Button>
// //                         </Box>

// //                         {(() => {
// //                           const { totalPaid, totalOwed, totalShouldPay, netBalance, details } = getMemberTotals(selectedDetailMember);
// //                           return (
// //                             <>
// //                               <Grid container spacing={3} sx={{ mb: 4 }}>
// //                                 <Grid item xs={12} sm={3}>
// //                                   <Paper sx={{ p: 2, textAlign: 'center', background: alpha(colors.successNeon, 0.1) }}>
// //                                     <Typography variant="body2" color="gray">Total Paid (They paid)</Typography>
// //                                     <Typography variant="h5" sx={{ color: colors.successNeon, fontWeight: 'bold' }}>₹{totalPaid.toFixed(2)}</Typography>
// //                                   </Paper>
// //                                 </Grid>
// //                                 <Grid item xs={12} sm={3}>
// //                                   <Paper sx={{ p: 2, textAlign: 'center', background: alpha(colors.warning, 0.1) }}>
// //                                     <Typography variant="body2" color="gray">Total They Owe</Typography>
// //                                     <Typography variant="h5" sx={{ color: colors.warning, fontWeight: 'bold' }}>₹{totalOwed.toFixed(2)}</Typography>
// //                                   </Paper>
// //                                 </Grid>
// //                                 <Grid item xs={12} sm={3}>
// //                                   <Paper sx={{ p: 2, textAlign: 'center', background: alpha(colors.info, 0.1) }}>
// //                                     <Typography variant="body2" color="gray">Total They Should Pay</Typography>
// //                                     <Typography variant="h5" sx={{ color: colors.info, fontWeight: 'bold' }}>₹{totalShouldPay.toFixed(2)}</Typography>
// //                                   </Paper>
// //                                 </Grid>
// //                                 <Grid item xs={12} sm={3}>
// //                                   <Paper sx={{ p: 2, textAlign: 'center', background: alpha(netBalance >= 0 ? colors.successNeon : colors.error, 0.1) }}>
// //                                     <Typography variant="body2" color="gray">Net Balance</Typography>
// //                                     <Typography variant="h5" sx={{ color: netBalance >= 0 ? colors.successNeon : colors.error, fontWeight: 'bold' }}>
// //                                       {netBalance >= 0 ? '+' : ''}₹{netBalance.toFixed(2)}
// //                                     </Typography>
// //                                   </Paper>
// //                                 </Grid>
// //                               </Grid>

// //                               <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.textPrimary }}>
// //                                 📋 Expense Breakdown
// //                               </Typography>
// //                               <Table>
// //                                 <TableHead>
// //                                   <TableRow sx={{ background: alpha(colors.primaryNeon, 0.2) }}>
// //                                     <TableCell sx={{ fontWeight: 700 }}>Date</TableCell>
// //                                     <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
// //                                     <TableCell sx={{ fontWeight: 700 }}>Total Amount</TableCell>
// //                                     <TableCell sx={{ fontWeight: 700 }}>Paid By (Who paid)</TableCell>
// //                                     <TableCell sx={{ fontWeight: 700 }}>{selectedDetailMember}'s Share</TableCell>
// //                                     <TableCell sx={{ fontWeight: 700 }}>Role</TableCell>
// //                                     <TableCell sx={{ fontWeight: 700 }}>Split With</TableCell>
// //                                   </TableRow>
// //                                 </TableHead>
// //                                 <TableBody>
// //                                   {details.map((detail, idx) => (
// //                                     <TableRow key={idx}>
// //                                       <TableCell>{formatDate(detail.date)}</TableCell>
// //                                       <TableCell>{detail.description}</TableCell>
// //                                       <TableCell sx={{ color: colors.primaryNeon, fontWeight: 600 }}>₹{detail.totalAmount.toFixed(2)}</TableCell>
// //                                       <TableCell>
// //                                         <Chip 
// //                                           label={detail.paidBy} 
// //                                           size="small"
// //                                           sx={{ background: getMemberColor(detail.paidBy), color: 'white' }}
// //                                         />
// //                                       </TableCell>
// //                                       <TableCell sx={{ color: detail.role === 'paid' ? colors.successNeon : colors.warning, fontWeight: 600 }}>
// //                                         ₹{detail.memberShare.toFixed(2)}
// //                                       </TableCell>
// //                                       <TableCell>
// //                                         <Chip 
// //                                           label={detail.role === 'paid' ? 'They Paid' : 'They Owe'} 
// //                                           size="small"
// //                                           sx={{ 
// //                                             background: detail.role === 'paid' ? colors.successNeon : colors.warning,
// //                                             color: 'white'
// //                                           }}
// //                                         />
// //                                       </TableCell>
// //                                       <TableCell>
// //                                         <Stack direction="row" spacing={0.5} flexWrap="wrap">
// //                                           {detail.splitWith.map(name => (
// //                                             <Chip 
// //                                               key={name} 
// //                                               label={name} 
// //                                               size="small" 
// //                                               sx={{ background: getMemberColor(name), color: 'white' }}
// //                                             />
// //                                           ))}
// //                                         </Stack>
// //                                       </TableCell>
// //                                     </TableRow>
// //                                   ))}
// //                                   {details.length === 0 && (
// //                                     <TableRow>
// //                                       <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
// //                                         <Typography color="text.secondary">No expenses found for {selectedDetailMember}</Typography>
// //                                       </TableCell>
// //                                     </TableRow>
// //                                   )}
// //                                 </TableBody>
// //                               </Table>
// //                             </>
// //                           );
// //                         })()}
// //                       </CardContent>
// //                     </Card>
// //                   </Zoom>
// //                 )}

// //                 {/* Grouped Expenses by Date */}
// //                 <Card sx={{ borderRadius: 4, background: colors.glassBg, backdropFilter: 'blur(10px)', border: `1px solid ${colors.glassBorder}` }}>
// //                   <CardContent>
// //                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
// //                       <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary }}>
// //                         📅 {viewType === 'daily' ? 'Daily' : viewType === 'weekly' ? 'Weekly' : 'Monthly'} Expense Breakdown
// //                       </Typography>
// //                       <FormControl size="small" sx={{ minWidth: 120 }}>
// //                         <Select value={viewType} onChange={(e) => setViewType(e.target.value)}>
// //                           <MenuItem value="daily">Daily</MenuItem>
// //                           <MenuItem value="weekly">Weekly</MenuItem>
// //                           <MenuItem value="monthly">Monthly</MenuItem>
// //                         </Select>
// //                       </FormControl>
// //                     </Box>
// //                     {groupedExpenses.map((group, idx) => (
// //                       <Paper key={idx} sx={{ mb: 3, p: 2, background: alpha(colors.glassBg, 0.3), borderRadius: 3 }}>
// //                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
// //                           <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.primaryNeon }}>
// //                             {viewType === 'daily' ? group.date.format('DD MMMM YYYY') : 
// //                              viewType === 'weekly' ? `Week ${group.key.split('-W')[1]} - ${group.date.format('MMM YYYY')}` : 
// //                              group.date.format('MMMM YYYY')}
// //                           </Typography>
// //                           <Chip label={`Total: ₹${group.total.toFixed(2)}`} sx={{ bgcolor: alpha(colors.successNeon, 0.2), color: colors.successNeon, fontWeight: 600 }} />
// //                         </Box>
// //                         <Table size="small">
// //                           <TableHead>
// //                             <TableRow>
// //                               <TableCell>Date</TableCell>
// //                               <TableCell>Description</TableCell>
// //                               <TableCell>Amount</TableCell>
// //                               <TableCell>Paid By</TableCell>
// //                               <TableCell>Category</TableCell>
// //                             </TableRow>
// //                           </TableHead>
// //                           <TableBody>
// //                             {group.items.map((exp, i) => (
// //                               <TableRow key={i}>
// //                                 <TableCell>{formatDate(exp.Date)}</TableCell>
// //                                 <TableCell>{exp.Description}</TableCell>
// //                                 <TableCell sx={{ color: colors.successNeon }}>₹{exp.Amount.toFixed(2)}</TableCell>
// //                                 <TableCell>{exp.Payer}</TableCell>
// //                                 <TableCell>{exp.Category}</TableCell>
// //                               </TableRow>
// //                             ))}
// //                           </TableBody>
// //                         </Table>
// //                       </Paper>
// //                     ))}
// //                     {groupedExpenses.length === 0 && (
// //                       <Box sx={{ textAlign: 'center', py: 4 }}>
// //                         <Typography color="text.secondary">No expenses found for the selected filters.</Typography>
// //                       </Box>
// //                     )}
// //                   </CardContent>
// //                 </Card>
// //               </Box>
// //             </Fade>
// //           )}

// //           {/* Balances Tab */}
// //           {activeTab === 2 && (
// //             <Fade in={activeTab === 2} timeout={500}>
// //               <Paper sx={{ 
// //                 borderRadius: 4, 
// //                 overflow: 'hidden', 
// //                 background: colors.glassBg,
// //                 backdropFilter: 'blur(10px)',
// //                 border: `1px solid ${colors.glassBorder}`,
// //                 '& .MuiTableCell-root': { borderColor: colors.glassBorder, color: colors.textPrimary }
// //               }}>
// //                 <Table>
// //                   <TableHead sx={{ background: alpha(colors.primaryNeon, 0.1) }}>
// //                     <TableRow>
// //                       <TableCell sx={{ fontWeight: 700 }}>Member</TableCell>
// //                       <TableCell sx={{ fontWeight: 700 }}>Total Paid (₹)</TableCell>
// //                       <TableCell sx={{ fontWeight: 700 }}>Total Share (₹)</TableCell>
// //                       <TableCell sx={{ fontWeight: 700 }}>Net Balance (₹)</TableCell>
// //                     </TableRow>
// //                   </TableHead>
// //                   <TableBody>
// //                     {members.map(m => {
// //                       const bal = memberBalances[m.Name] || { paid: 0, share: 0, net: 0 };
// //                       return (
// //                         <TableRow key={m.MemberId}>
// //                           <TableCell>
// //                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
// //                               <Avatar sx={{ background: getAvatarGradient(m.Name), width: 45, height: 45, fontWeight: 700, color: 'white' }}>{m.Name[0]}</Avatar>
// //                               <Typography fontWeight={700}>{m.Name}</Typography>
// //                             </Box>
// //                           </TableCell>
// //                           <TableCell sx={{ fontWeight: 600, color: colors.successNeon }}>₹{bal.paid.toFixed(2)}</TableCell>
// //                           <TableCell sx={{ fontWeight: 600, color: colors.warning }}>₹{bal.share.toFixed(2)}</TableCell>
// //                           <TableCell>
// //                             <Chip 
// //                               icon={bal.net >= 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
// //                               label={`${bal.net >= 0 ? '+' : ''}₹${bal.net.toFixed(2)}`}
// //                               size="medium"
// //                               sx={{ 
// //                                 background: bal.net >= 0 ? `linear-gradient(135deg, ${colors.success}, ${colors.successNeon})` : `linear-gradient(135deg, ${colors.error}, ${colors.secondaryNeon})`,
// //                                 color: 'white',
// //                                 fontWeight: 700,
// //                                 px: 2,
// //                                 py: 2.5,
// //                                 '& .MuiChip-icon': { color: 'white' }
// //                               }}
// //                             />
// //                           </TableCell>
// //                         </TableRow>
// //                       );
// //                     })}
// //                   </TableBody>
// //                 </Table>
// //                 <Box sx={{ p: 2, bgcolor: alpha(colors.warning, 0.1), m: 2, borderRadius: 2 }}>
// //                   <Typography variant="caption" sx={{ color: colors.textSecondary }}>
// //                     💡 <strong>Understanding Balances:</strong><br/>
// //                     • <span style={{ color: colors.successNeon }}>Positive Net Balance (+₹)</span> = Person is OWED money (they paid more than their share)<br/>
// //                     • <span style={{ color: colors.error }}>Negative Net Balance (-₹)</span> = Person OWES money (they paid less than their share)<br/>
// //                     • Total Paid - Total Share = Net Balance
// //                   </Typography>
// //                 </Box>
// //               </Paper>
// //             </Fade>
// //           )}

// //           {/* Settlements Tab */}
// //           {activeTab === 3 && (
// //             <Fade in={activeTab === 3} timeout={500}>
// //               <Card sx={{ 
// //                 borderRadius: 4, 
// //                 background: colors.glassBg,
// //                 backdropFilter: 'blur(10px)',
// //                 border: `1px solid ${colors.glassBorder}`
// //               }}>
// //                 <CardContent sx={{ p: 4 }}>
// //                   <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary }}>
// //                     <StarsIcon sx={{ color: colors.successNeon }} />
// //                     Settlement Plan
// //                   </Typography>
// //                   <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 3 }}>
// //                     Direct payments to clear all debts
// //                   </Typography>
// //                   {settlements.length === 0 ? (
// //                     <Box sx={{ textAlign: 'center', py: 6 }}>
// //                       <CheckCircleIcon sx={{ fontSize: 80, color: colors.successNeon, mb: 2, filter: 'drop-shadow(0 0 20px rgba(16,185,129,0.5))' }} />
// //                       <Typography variant="h5" sx={{ color: colors.successNeon, fontWeight: 700, mb: 1 }}>All settled up! 🎉</Typography>
// //                       <Typography variant="body1" sx={{ color: colors.textSecondary }}>Everyone is balanced. Great job managing expenses!</Typography>
// //                     </Box>
// //                   ) : (
// //                     <Stack spacing={2}>
// //                       {settlements.map((s, i) => (
// //                         <Slide direction="left" in={true} timeout={500 + i * 100} key={i}>
// //                           <Paper sx={{ 
// //                             p: 2,
// //                             display: 'flex', 
// //                             alignItems: 'center', 
// //                             justifyContent: 'space-between', 
// //                             borderRadius: 3, 
// //                             background: alpha(colors.glassBg, 0.5),
// //                             border: `1px solid ${colors.glassBorder}`,
// //                             '&:hover': { transform: 'translateX(10px)', transition: 'transform 0.3s' }
// //                           }}>
// //                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                               <Avatar sx={{ background: getMemberColor(s.from), width: 40, height: 40, fontWeight: 700, fontSize: '1.2rem', ml: 5 }}>{s.from[0]}</Avatar>
// //                               <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textPrimary }}>pays</Typography>
// //                               <Typography variant="h3" sx={{ fontWeight: 600, background: `linear-gradient(135deg, ${colors.primaryNeon}, ${colors.successNeon})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', fontSize: 25 }}>₹{s.amount.toFixed(2)}</Typography>
// //                               <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textPrimary }}>to</Typography>
// //                               <Avatar sx={{ background: getMemberColor(s.to), width: 40, height: 40, fontWeight: 700, fontSize: '1.2rem' }}>{s.to[0]}</Avatar>
// //                             </Box>
// //                             <Badge 
// //                               badgeContent={`${i + 1}`} 
// //                               sx={{ '& .MuiBadge-badge': { background: colors.primaryNeon, color: 'white', fontWeight: 700, fontSize: 14, width: 32, height: 32, borderRadius: '50%', mr: 5 } }} 
// //                             />
// //                           </Paper>
// //                         </Slide>
// //                       ))}
// //                     </Stack>
// //                   )}
// //                 </CardContent>
// //               </Card>
// //             </Fade>
// //           )}

// //           <Snackbar 
// //             open={snackbar.open} 
// //             autoHideDuration={4000} 
// //             onClose={() => setSnackbar({ ...snackbar, open: false })}
// //             anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
// //           >
// //             <Alert severity={snackbar.severity} sx={{ borderRadius: 3, boxShadow: 3, fontWeight: 500, background: colors.glassBg, backdropFilter: 'blur(10px)', color: colors.textPrimary }}>
// //               {snackbar.message}
// //             </Alert>
// //           </Snackbar>
// //         </Container>

// //         <style>{`
// //           @keyframes float {
// //             0%, 100% { transform: translate(0, 0) rotate(0deg); }
// //             50% { transform: translate(20px, -20px) rotate(180deg); }
// //           }
// //           .MuiInputBase-input { color: white !important; }
// //           .MuiPickersDay-root { color: white !important; }
// //           .MuiPickersYear-yearButton { color: white !important; }
// //           .MuiPickersMonth-monthButton { color: white !important; }
// //           .MuiPickersPopper-paper { background-color: #1e293b !important; }
// //           .MuiPickersDay-root.Mui-selected { background-color: #6366f1 !important; color: white !important; }
// //           .MuiDialog-container .MuiPaper-root { background-color: #1e293b !important; }
// //           .MuiPickersToolbar-root { background-color: #6366f1 !important; }
// //         `}</style>
// //       </Box>
// //     </LocalizationProvider>
// //   );
// // }

// import { useState, useEffect } from 'react';
// import {
//   Container, Tabs, Tab, Box, Typography, Card, CardContent, Grid,
//   Button, TextField, Select, MenuItem, InputLabel, FormControl,
//   FormGroup, FormControlLabel, Checkbox, Table, TableBody, TableCell,
//   TableHead, TableRow, Paper, Chip, IconButton, Avatar, Divider,
//   Fade, Zoom, Grow, Slide, alpha, Stack, Badge,
//   Tooltip, Alert, Snackbar, CircularProgress, useMediaQuery, useTheme,
//   Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
// } from '@mui/material';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import ReceiptIcon from '@mui/icons-material/Receipt';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Cancel';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import TrendingDownIcon from '@mui/icons-material/TrendingDown';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import HomeIcon from '@mui/icons-material/Home';
// import CategoryIcon from '@mui/icons-material/Category';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import TrainIcon from '@mui/icons-material/Train';
// import WeekendIcon from '@mui/icons-material/Weekend';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import PeopleIcon from '@mui/icons-material/People';
// import StarsIcon from '@mui/icons-material/Stars';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';
// import PersonIcon from '@mui/icons-material/Person';
// import MenuIcon from '@mui/icons-material/Menu';
// import axios from 'axios';

// // ─── Color Palette ───────────────────────────────────────────────────────────
// const colors = {
//   primary: '#6366f1',
//   primaryNeon: '#a855f7',
//   secondary: '#ec4899',
//   secondaryNeon: '#f43f5e',
//   success: '#10b981',
//   successNeon: '#06b6d4',
//   warning: '#f59e0b',
//   error: '#ef4444',
//   info: '#3b82f6',
//   purple: '#8b5cf6',
//   orange: '#f97316',
//   teal: '#14b8a6',
//   cyan: '#06b6d4',
//   pink: '#d946ef',
//   background: '#0f172a',
//   backgroundLight: '#1e293b',
//   cardBg: 'rgba(30, 41, 59, 0.8)',
//   textPrimary: '#f1f5f9',
//   textSecondary: '#94a3b8',
//   glassBorder: 'rgba(255,255,255,0.1)',
//   glassBg: 'rgba(83, 57, 57, 0.05)',
// };

// const memberColors = {
//   0: '#64748b', 1: '#fda4af', 2: '#fbbf24', 3: '#024532', 4: '#737373',
//   5: '#78716c', 6: '#0ea5e9', 7: '#8b5cf6', 8: '#84cc16', 9: '#c026d3',
//   10: '#2563eb', 11: '#0f766e', 12: '#fb923c', 13: '#818cf8', 14: '#eab308',
// };

// const getMemberColor = (name) => {
//   if (!name) return colors.primary;
//   let hash = 0;
//   for (let i = 0; i < name.length; i++) {
//     hash = (hash + name.charCodeAt(i)) % Object.keys(memberColors).length;
//   }
//   return memberColors[hash];
// };

// const categoryDisplay = {
//   food: 'Food & Dining 🍔',
//   grocery: 'Groceries 🥕',
//   transport: 'Transport 🚌',
//   accommodation: 'Accommodation 🏠',
//   entertainment: 'Entertainment 🎬',
// };

// // ─── Shared input sx ─────────────────────────────────────────────────────────
// const inputSx = {
//   width: '100%',
//   background: '#ffffff1f',
//   borderRadius: '10px',
//   '& .MuiOutlinedInput-root': {
//     borderRadius: '10px',
//     color: colors.textPrimary,
//     '& fieldset': { borderColor: colors.glassBorder },
//     '&:hover fieldset': { borderColor: alpha(colors.primaryNeon, 0.5) },
//     '&.Mui-focused fieldset': { borderColor: colors.primaryNeon },
//   },
//   '& .MuiInputLabel-root': { color: colors.textSecondary },
//   '& .MuiInputBase-input': { color: `${colors.textPrimary} !important` },
//   '& .MuiSelect-icon': { color: colors.textSecondary },
// };

// // ─── Helpers ─────────────────────────────────────────────────────────────────
// const getAvatarGradient = (name) => {
//   const c = getMemberColor(name);
//   return `linear-gradient(135deg, ${c}, ${c}cc)`;
// };

// const getCategoryIcon = (cat) => {
//   const s = { fontSize: 18, color: 'white !important' };
//   switch (cat) {
//     case 'food': return <FastfoodIcon sx={s} />;
//     case 'grocery': return <ShoppingCartIcon sx={s} />;
//     case 'transport': return <TrainIcon sx={s} />;
//     case 'accommodation': return <HomeIcon sx={s} />;
//     case 'entertainment': return <WeekendIcon sx={s} />;
//     default: return <CategoryIcon sx={s} />;
//   }
// };

// const getCategoryGradient = (cat) => {
//   switch (cat) {
//     case 'food': return `linear-gradient(135deg, ${colors.orange}, #ea580c)`;
//     case 'grocery': return `linear-gradient(135deg, ${colors.teal}, #0d9488)`;
//     case 'transport': return `linear-gradient(135deg, ${colors.info}, #2563eb)`;
//     case 'accommodation': return `linear-gradient(135deg, ${colors.purple}, #7c3aed)`;
//     case 'entertainment': return `linear-gradient(135deg, ${colors.pink}, #c026d3)`;
//     default: return `linear-gradient(135deg, ${colors.primary}, ${colors.primaryNeon})`;
//   }
// };

// const formatDate = (d) => {
//   if (!d) return 'No date';
//   const dt = dayjs(d);
//   return dt.isValid() ? dt.format('DD MMM YYYY') : 'Invalid date';
// };

// // ─── Tab definitions ──────────────────────────────────────────────────────────
// const TABS = [
//   { label: 'Expenses', icon: <ReceiptIcon /> },
//   { label: 'Analytics', icon: <AnalyticsIcon /> },
//   { label: 'Balances', icon: <AccountBalanceWalletIcon /> },
//   { label: 'Settle Up', icon: <TrendingUpIcon /> },
// ];

// // ═══════════════════════════════════════════════════════════════════════════════
// export default function App() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.down('md'));

//   const [activeTab, setActiveTab] = useState(0);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [members, setMembers] = useState([]);
//   const [expenses, setExpenses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

//   // Analytics
//   const [startDate, setStartDate] = useState(dayjs().startOf('month'));
//   const [endDate, setEndDate] = useState(dayjs());
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [viewType, setViewType] = useState('daily');
//   const [selectedDetailMember, setSelectedDetailMember] = useState('all');

//   // Add Expense
//   const [newMember, setNewMember] = useState('');
//   const [desc, setDesc] = useState('');
//   const [amount, setAmount] = useState('');
//   const [payer, setPayer] = useState('');
//   const [category, setCategory] = useState('food');
//   const [expenseDate, setExpenseDate] = useState(dayjs());
//   const [selectedSplits, setSelectedSplits] = useState({});

//   // Edit Expense
//   const [editingExpenseId, setEditingExpenseId] = useState(null);
//   const [editDesc, setEditDesc] = useState('');
//   const [editAmount, setEditAmount] = useState('');
//   const [editPayerId, setEditPayerId] = useState('');
//   const [editCategory, setEditCategory] = useState('food');
//   const [editExpenseDate, setEditExpenseDate] = useState(dayjs());
//   const [editSelectedSplits, setEditSelectedSplits] = useState({});

//   const showNotification = (message, severity = 'success') =>
//     setSnackbar({ open: true, message, severity });

//   useEffect(() => {
//     (async () => {
//       setLoading(true);
//       try {
//         const memRes = await axios.get('http://localhost:5000/api/members');
//         const expRes = await axios.get('http://localhost:5000/api/expenses');
//         setMembers(memRes.data);
//         setExpenses(expRes.data);
//         const checks = {};
//         memRes.data.forEach((m) => { checks[m.MemberId] = true; });
//         setSelectedSplits(checks);
//       } catch {
//         showNotification('Failed to load data', 'error');
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   const refreshData = async () => {
//     try {
//       const memRes = await axios.get('http://localhost:5000/api/members');
//       const expRes = await axios.get('http://localhost:5000/api/expenses');
//       setMembers(memRes.data);
//       setExpenses(expRes.data);
//     } catch {
//       showNotification('Failed to refresh data', 'error');
//     }
//   };

//   // ─── Business logic (unchanged) ──────────────────────────────────────────
//   const calculateMemberShares = (expense) => {
//     const shares = {};
//     const splitWith = expense.SplitWith || [];
//     const pd = expense.Payer;
//     const total = expense.Amount;
//     const n = splitWith.length;
//     if (n > 0) {
//       const share = total / n;
//       splitWith.forEach((person) => {
//         if (person === pd) {
//           shares[person] = { amount: share, role: 'paid', owesTo: null, message: `${person} paid ₹${total.toFixed(2)} — share ₹${share.toFixed(2)}` };
//         } else {
//           shares[person] = { amount: share, role: 'owes', owesTo: pd, message: `${person} owes ₹${share.toFixed(2)} to ${pd}` };
//         }
//       });
//     }
//     return shares;
//   };

//   const filteredExpenses = expenses.filter((exp) => {
//     if (!exp.Date) return false;
//     const d = dayjs(exp.Date);
//     return (
//       (!startDate || d.isAfter(startDate.subtract(1, 'day'))) &&
//       (!endDate || d.isBefore(endDate.add(1, 'day'))) &&
//       (selectedCategory === 'all' || exp.Category === selectedCategory)
//     );
//   });

//   const getMemberExpenseDetails = (memberName) => {
//     const details = [];
//     expenses.forEach((expense) => {
//       const splitWith = expense.SplitWith || [];
//       const pd = expense.Payer;
//       const amt = expense.Amount;
//       const n = splitWith.length;
//       if (splitWith.includes(memberName) || pd === memberName) {
//         const share = n > 0 ? amt / n : 0;
//         details.push({
//           expenseId: expense.ExpenseId,
//           date: expense.Date,
//           description: expense.Description,
//           totalAmount: amt,
//           paidBy: pd,
//           memberShare: share,
//           role: pd === memberName ? 'paid' : 'owes',
//           category: expense.Category,
//           splitWith,
//         });
//       }
//     });
//     return details;
//   };

//   const getMemberTotals = (memberName) => {
//     const details = getMemberExpenseDetails(memberName);
//     let totalPaid = 0, totalOwed = 0, totalShouldPay = 0;
//     details.forEach((d) => {
//       if (d.role === 'paid') { totalPaid += d.totalAmount; totalShouldPay += d.memberShare; }
//       else { totalOwed += d.memberShare; totalShouldPay += d.memberShare; }
//     });
//     return { totalPaid, totalOwed, totalShouldPay, netBalance: totalPaid - totalShouldPay, details };
//   };

//   const getGroupedExpenses = () => {
//     const groups = {};
//     filteredExpenses.forEach((exp) => {
//       const date = dayjs(exp.Date);
//       const key = viewType === 'daily' ? date.format('YYYY-MM-DD')
//         : viewType === 'weekly' ? `${date.year()}-W${date.week()}`
//         : date.format('YYYY-MM');
//       if (!groups[key]) groups[key] = { total: 0, items: [], date };
//       groups[key].total += exp.Amount;
//       groups[key].items.push(exp);
//     });
//     return Object.entries(groups)
//       .sort((a, b) => a[1].date.isBefore(b[1].date) ? -1 : 1)
//       .map(([key, val]) => ({ key, ...val }));
//   };

//   const categorySummary = filteredExpenses.reduce((acc, exp) => {
//     if (!acc[exp.Category]) acc[exp.Category] = { total: 0, count: 0 };
//     acc[exp.Category].total += exp.Amount;
//     acc[exp.Category].count += 1;
//     return acc;
//   }, {});

//   const memberSummary = filteredExpenses.reduce((acc, exp) => {
//     if (!acc[exp.Payer]) acc[exp.Payer] = { total: 0, count: 0 };
//     acc[exp.Payer].total += exp.Amount;
//     acc[exp.Payer].count += 1;
//     return acc;
//   }, {});

//   const totalFilteredAmount = filteredExpenses.reduce((s, e) => s + e.Amount, 0);
//   const totalSpent = expenses.reduce((s, e) => s + e.Amount, 0);

//   const computeBalances = () => {
//     const b = {};
//     members.forEach((m) => { b[m.Name] = { paid: 0, share: 0, net: 0 }; });
//     expenses.forEach((exp) => {
//       const pd = exp.Payer;
//       const splitWith = exp.SplitWith || [];
//       const n = splitWith.length;
//       if (b[pd]) b[pd].paid += exp.Amount;
//       if (n > 0) {
//         const share = exp.Amount / n;
//         splitWith.forEach((p) => { if (b[p]) b[p].share += share; });
//       }
//     });
//     Object.keys(b).forEach((n) => { b[n].net = b[n].paid - b[n].share; });
//     return b;
//   };

//   const computeSettlements = () => {
//     const txns = [];
//     expenses.forEach((exp) => {
//       const pd = exp.Payer;
//       const splitWith = exp.SplitWith || [];
//       const n = splitWith.length;
//       if (n > 0) {
//         const share = exp.Amount / n;
//         splitWith.forEach((p) => { if (p !== pd) txns.push({ from: p, to: pd, amount: share }); });
//       }
//     });
//     const map = new Map();
//     txns.forEach((t) => {
//       const key = `${t.from}|${t.to}`;
//       map.set(key, (map.get(key) || 0) + t.amount);
//     });
//     let list = Array.from(map.entries()).map(([k, a]) => {
//       const [from, to] = k.split('|');
//       return { from, to, amount: Math.round(a * 100) / 100 };
//     }).filter((t) => t.amount > 0.01);
//     let changed = true;
//     while (changed) {
//       changed = false;
//       for (let i = 0; i < list.length; i++) {
//         for (let j = i + 1; j < list.length; j++) {
//           if (list[i].from === list[j].to && list[i].to === list[j].from) {
//             const a = list[i].amount, b = list[j].amount;
//             if (a > b) { list[i].amount = a - b; list.splice(j, 1); }
//             else if (b > a) { list[j].amount = b - a; list.splice(i, 1); }
//             else { list.splice(i, 1); list.splice(j - 1, 1); }
//             changed = true; break;
//           }
//         }
//         if (changed) break;
//       }
//     }
//     return list.filter((t) => t.amount > 0.01).sort((a, b) => b.amount - a.amount);
//   };

//   const memberBalances = computeBalances();
//   const settlements = computeSettlements();
//   const groupedExpenses = getGroupedExpenses();

//   const exportToCSV = () => {
//     const headers = ['Date', 'Description', 'Amount', 'Paid By', 'Category', 'Split With'];
//     const rows = filteredExpenses.map((exp) => [exp.Date, exp.Description, exp.Amount, exp.Payer, exp.Category, (exp.SplitWith || []).join(', ')]);
//     const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
//     const a = document.createElement('a');
//     a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
//     a.download = `expenses_${dayjs().format('YYYY-MM-DD')}.csv`;
//     a.click();
//     showNotification('Exported successfully! 📊');
//   };

//   const handleAddMember = async () => {
//     if (!newMember.trim()) return;
//     try {
//       await axios.post('http://localhost:5000/api/members', { name: newMember });
//       setNewMember('');
//       await refreshData();
//       showNotification(`${newMember} joined the hostel! 🎉`);
//     } catch { showNotification('Failed to add member', 'error'); }
//   };

//   const handleDeleteMember = async (id, name) => {
//     if (!window.confirm(`Remove ${name} from the hostel?`)) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/members/${id}`);
//       await refreshData();
//       showNotification(`${name} left the hostel 👋`, 'info');
//     } catch { showNotification('Failed to delete member', 'error'); }
//   };

//   const handleAddExpense = async () => {
//     const splitIds = Object.keys(selectedSplits).filter((id) => selectedSplits[id]).map(Number);
//     if (!desc.trim() || !amount || !payer || splitIds.length === 0) {
//       showNotification('Please fill all fields and select at least one person to split with', 'warning');
//       return;
//     }
//     try {
//       await axios.post('http://localhost:5000/api/expenses', {
//         description: desc, amount: parseFloat(amount), payerId: parseInt(payer),
//         category, splitMemberIds: splitIds, date: expenseDate.format('YYYY-MM-DD'),
//       });
//       setDesc(''); setAmount(''); setPayer(''); setExpenseDate(dayjs());
//       await refreshData();
//       showNotification('Expense added successfully! 💰');
//     } catch { showNotification('Failed to add expense', 'error'); }
//   };

//   const startEditExpense = (expense) => {
//     setEditingExpenseId(expense.ExpenseId);
//     setEditDesc(expense.Description);
//     setEditAmount(expense.Amount);
//     setEditCategory(expense.Category);
//     setEditExpenseDate(expense.Date ? dayjs(expense.Date) : dayjs());
//     const matched = members.find((m) => m.Name === expense.Payer);
//     setEditPayerId(matched ? matched.MemberId : '');
//     const map = {};
//     members.forEach((m) => { map[m.MemberId] = Array.isArray(expense.SplitWith) && expense.SplitWith.includes(m.Name); });
//     setEditSelectedSplits(map);
//   };

//   const handleSaveEditExpense = async (expenseId) => {
//     const splitIds = Object.keys(editSelectedSplits).filter((id) => editSelectedSplits[id]).map(Number);
//     if (!editDesc.trim() || !editAmount || !editPayerId || splitIds.length === 0) {
//       showNotification('Please fill all fields', 'warning'); return;
//     }
//     try {
//       await axios.put(`http://localhost:5000/api/expenses/${expenseId}`, {
//         description: editDesc, amount: parseFloat(editAmount), payerId: parseInt(editPayerId),
//         category: editCategory, splitMemberIds: splitIds, date: editExpenseDate.format('YYYY-MM-DD'),
//       });
//       setEditingExpenseId(null);
//       await refreshData();
//       showNotification('Expense updated! ✏️');
//     } catch { showNotification('Failed to update expense', 'error'); }
//   };

//   const handleDeleteExpense = async (id) => {
//     if (!window.confirm('Permanently delete this bill?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/expenses/${id}`);
//       await refreshData();
//       showNotification('Expense deleted 🗑️');
//     } catch { showNotification('Failed to delete expense', 'error'); }
//   };

//   // ─── Shared card sx ────────────────────────────────────────────────────────
//   const glassCard = {
//     borderRadius: 4,
//     background: colors.glassBg,
//     backdropFilter: 'blur(10px)',
//     border: `1px solid ${colors.glassBorder}`,
//   };

//   const hoverLift = {
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     '&:hover': { transform: 'translateY(-5px)', boxShadow: `0 20px 40px ${alpha(colors.primaryNeon, 0.2)}` },
//   };

//   // ─── Loading screen ────────────────────────────────────────────────────────
//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: colors.background }}>
//         <CircularProgress sx={{ color: colors.primaryNeon }} />
//       </Box>
//     );
//   }

//   // ─── Mobile Nav Drawer ─────────────────────────────────────────────────────
//   const MobileDrawer = (
//     <Drawer
//       anchor="left"
//       open={drawerOpen}
//       onClose={() => setDrawerOpen(false)}
//       PaperProps={{ sx: { background: "#1e293b", width: 240 } }}
//     >
//       <Box sx={{ pt: 2, pb: 1, px: 2 }}>
//         <Typography variant="h6" sx={{ color: colors.primaryNeon, fontWeight: 700 }}>✨ Hostel Tracker</Typography>
//       </Box>
//       <Divider sx={{ borderColor: colors.glassBorder }} />
//       <List>
//         {TABS.map((tab, idx) => (
//           <ListItem key={idx} disablePadding>
//             <ListItemButton
//               selected={activeTab === idx}
//               onClick={() => { setActiveTab(idx); setDrawerOpen(false); }}
//               sx={{ '&.Mui-selected': { background: alpha(colors.primaryNeon, 0.15), color: colors.primaryNeon } }}
//             >
//               <ListItemIcon sx={{ color: activeTab === idx ? colors.primaryNeon : colors.textSecondary, minWidth: 36 }}>
//                 {tab.icon}
//               </ListItemIcon>
//               <ListItemText primary={tab.label} sx={{ '& .MuiTypography-root': { color: activeTab === idx ? colors.primaryNeon : colors.textPrimary, fontWeight: activeTab === idx ? 700 : 400 } }} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );

//   // ════════════════════════════════════════════════════════════════════════════
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{ minHeight: '100vh', background: `radial-gradient(circle at 0% 0%, ${colors.background} 0%, ${colors.backgroundLight} 100%)`, position: 'relative', overflow: 'hidden' }}>

//         {/* Ambient blobs */}
//         <Box sx={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
//           <Box sx={{ position: 'absolute', top: '10%', left: '5%', width: 300, height: 300, background: `radial-gradient(circle, ${alpha(colors.primaryNeon, 0.1)} 0%, transparent 70%)`, borderRadius: '50%', animation: 'float 20s infinite' }} />
//           <Box sx={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, background: `radial-gradient(circle, ${alpha(colors.secondaryNeon, 0.1)} 0%, transparent 70%)`, borderRadius: '50%', animation: 'float 25s infinite reverse' }} />
//         </Box>

//         {MobileDrawer}

//         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 2, sm: 4 }, px: { xs: 1.5, sm: 3 } }}>

//           {/* Header */}
//           <Slide direction="down" in timeout={400}>
//             <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 5 } }}>
//               {isMobile && (
//                 <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1 }}>
//                   <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: colors.primaryNeon }}>
//                     <MenuIcon />
//                   </IconButton>
//                 </Box>
//               )}
//               <Typography variant="h1" sx={{
//                 fontWeight: 800,
//                 background: `linear-gradient(135deg, ${colors.primaryNeon} 0%, ${colors.secondaryNeon} 33%, ${colors.successNeon} 66%, ${colors.purple} 100%)`,
//                 backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent',
//                 letterSpacing: { xs: '-1px', md: '-2px' },
//                 fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
//               }}>
//                 ✨ Hostel Expense Tracker ✨
//               </Typography>
//               <Typography variant="body1" sx={{ color: colors.textSecondary, maxWidth: 600, mx: 'auto', mt: 1, fontSize: { xs: '0.85rem', sm: '1rem' } }}>
//                 Split bills, track expenses, and settle up with your roommates seamlessly
//               </Typography>
//             </Box>
//           </Slide>

//           {/* Tab Bar (desktop / tablet) */}
//           {!isMobile && (
//             <Paper elevation={0} sx={{ mb: 4, ...glassCard, overflow: 'hidden' }}>
//               <Tabs
//                 value={activeTab}
//                 onChange={(_, v) => setActiveTab(v)}
//                 centered={!isTablet}
//                 variant={isTablet ? 'scrollable' : 'fullWidth'}
//                 scrollButtons="auto"
//                 sx={{ '& .MuiTabs-indicator': { background: `linear-gradient(90deg, ${colors.primaryNeon}, ${colors.secondaryNeon})`, height: 3 } }}
//               >
//                 {TABS.map((tab, idx) => (
//                   <Tab
//                     key={idx}
//                     icon={tab.icon}
//                     iconPosition="start"
//                     label={tab.label}
//                     sx={{ color: colors.textPrimary, '&.Mui-selected': { color: colors.primaryNeon }, minHeight: 56 }}
//                   />
//                 ))}
//               </Tabs>
//             </Paper>
//           )}

//           {/* Mobile bottom tab bar */}
//           {isMobile && (
//             <Paper elevation={4} sx={{
//               position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1200,
//               background: colors.backgroundLight,
//               borderTop: `1px solid ${colors.glassBorder}`,
//             }}>
//               <Tabs
//                 value={activeTab}
//                 onChange={(_, v) => setActiveTab(v)}
//                 variant="fullWidth"
//                 sx={{ '& .MuiTabs-indicator': { background: colors.primaryNeon, height: 2 } }}
//               >
//                 {TABS.map((tab, idx) => (
//                   <Tab
//                     key={idx}
//                     icon={tab.icon}
//                     label={<Typography sx={{ fontSize: '0.6rem', color: activeTab === idx ? colors.primaryNeon : colors.textSecondary }}>{tab.label}</Typography>}
//                     sx={{ color: activeTab === idx ? colors.primaryNeon : colors.textSecondary, minHeight: 56, py: 0.5 }}
//                   />
//                 ))}
//               </Tabs>
//             </Paper>
//           )}

//           {/* ─── EXPENSES TAB ─────────────────────────────────────────────── */}
//           {activeTab === 0 && (
//             <Fade in timeout={400}>
//               <Box sx={{ pb: isMobile ? 8 : 0 }}>

//                 {/* Roommates Card */}
//                 <Zoom in timeout={300}>
//                   <Card sx={{ mb: 3, ...glassCard, ...hoverLift }}>
//                     <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
//                       <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
//                         <StarsIcon sx={{ color: colors.primaryNeon }} /> Roommates
//                       </Typography>
//                       <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2.5 }}>
//                         {members.map((m, idx) => (
//                           <Grow in timeout={idx * 80} key={m.MemberId}>
//                             <Chip
//                               avatar={<Avatar sx={{ background: getAvatarGradient(m.Name), fontWeight: 700, color: '#fff !important' }}>{m.Name[0]}</Avatar>}
//                               label={m.Name}
//                               onDelete={() => handleDeleteMember(m.MemberId, m.Name)}
//                               sx={{ fontWeight: 600, color: colors.textPrimary, background: alpha(colors.glassBg, 0.5), border: `1px solid ${colors.glassBorder}`, '&:hover': { background: alpha(colors.primaryNeon, 0.2) } }}
//                             />
//                           </Grow>
//                         ))}
//                       </Box>
//                       <Divider sx={{ borderColor: colors.glassBorder, my: 2 }} />
//                       <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
//                         <TextField
//                           size="small"
//                           label="Enter name..."
//                           value={newMember}
//                           onChange={(e) => setNewMember(e.target.value)}
//                           onKeyPress={(e) => e.key === 'Enter' && handleAddMember()}
//                           sx={{ ...inputSx, flex: 1 }}
//                         />
//                         <Button
//                           variant="contained"
//                           startIcon={<GroupAddIcon />}
//                           onClick={handleAddMember}
//                           fullWidth={isMobile}
//                           sx={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryNeon})`, borderRadius: 3, px: 3, whiteSpace: 'nowrap' }}
//                         >
//                           Add Member
//                         </Button>
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Zoom>

//                 {/* Add Expense Card */}
//                 <Zoom in timeout={400}>
//                   <Card sx={{ mb: 3, ...glassCard, ...hoverLift }}>
//                     <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
//                       <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
//                         <StarsIcon sx={{ color: colors.successNeon }} /> Log Shared Bill
//                       </Typography>

//                       <Grid container spacing={2}>
//                         {/* Row 1: Description + Amount */}
//                         <Grid item xs={12} sm={6}>
//                           <TextField fullWidth label="Description" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="e.g., Dinner, Groceries..." sx={inputSx} />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                           <TextField fullWidth label="Amount (₹)" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} sx={inputSx} />
//                         </Grid>

//                         {/* Row 2: Paid By + Category */}
//                         <Grid item xs={12} sm={6}>
//                           <FormControl fullWidth sx={inputSx}>
//                             <InputLabel>Paid By</InputLabel>
//                             <Select label="Paid By" value={payer} onChange={(e) => setPayer(e.target.value)}>
//                               {members.map((m) => <MenuItem key={m.MemberId} value={m.MemberId}>{m.Name}</MenuItem>)}
//                             </Select>
//                           </FormControl>
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                           <FormControl fullWidth sx={inputSx}>
//                             <InputLabel>Category</InputLabel>
//                             <Select label="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
//                               <MenuItem value="food">Food & Dining 🍔</MenuItem>
//                               <MenuItem value="grocery">Grocery 🥕</MenuItem>
//                               <MenuItem value="transport">Transport 🚌</MenuItem>
//                               <MenuItem value="accommodation">Accommodation 🏠</MenuItem>
//                               <MenuItem value="entertainment">Entertainment 🎬</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>

//                         {/* Row 3: Date */}
//                         <Grid item xs={12} sm={6}>
//                           <DatePicker
//                             label="Expense Date"
//                             value={expenseDate}
//                             onChange={setExpenseDate}
//                             sx={{ ...inputSx, '& .MuiSvgIcon-root': { color: colors.textSecondary } }}
//                             slotProps={{ textField: { fullWidth: true, sx: inputSx } }}
//                           />
//                         </Grid>

//                         {/* Split */}
//                         <Grid item xs={12}>
//                           <Typography variant="subtitle2" sx={{ color: colors.textSecondary, mb: 1, fontWeight: 600 }}>Split Between:</Typography>
//                           <FormGroup row sx={{ gap: { xs: 0.5, sm: 1.5 } }}>
//                             {members.map((m) => (
//                               <FormControlLabel
//                                 key={m.MemberId}
//                                 control={
//                                   <Checkbox
//                                     checked={!!selectedSplits[m.MemberId]}
//                                     onChange={() => setSelectedSplits((p) => ({ ...p, [m.MemberId]: !p[m.MemberId] }))}
//                                     sx={{ color: colors.primaryNeon, '&.Mui-checked': { color: colors.primaryNeon } }}
//                                   />
//                                 }
//                                 label={<Typography sx={{ color: colors.textPrimary, fontSize: { xs: '0.85rem', sm: '1rem' } }}>{m.Name}</Typography>}
//                               />
//                             ))}
//                           </FormGroup>
//                           <Typography variant="caption" sx={{ color: colors.warning, mt: 0.5, display: 'block' }}>
//                             ⚠️ Select ONLY people who need to pay back (Payer is excluded from split)
//                           </Typography>
//                         </Grid>
//                       </Grid>

//                       <Button
//                         variant="contained"
//                         startIcon={<ReceiptIcon />}
//                         onClick={handleAddExpense}
//                         fullWidth={isMobile}
//                         sx={{ mt: 3, background: `linear-gradient(135deg, ${colors.success}, ${colors.successNeon})`, borderRadius: 3, px: 5, py: 1.2, fontWeight: 700 }}
//                       >
//                         Add Expense
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </Zoom>

//                 {/* Stats Cards */}
//                 <Grid container spacing={2} sx={{ mb: 3, justifyContent: 'center' }}>
//                   {[
//                     { icon: <AttachMoneyIcon sx={{ fontSize: { xs: 36, sm: 50 }, color: colors.primaryNeon }} />, value: `₹${totalSpent.toFixed(2)}`, label: 'TOTAL SPENT', gradient: `linear-gradient(135deg, ${alpha(colors.primary, 0.2)}, ${alpha(colors.primaryNeon, 0.1)})`, border: alpha(colors.primaryNeon, 0.3), color: colors.primaryNeon },
//                     { icon: <ReceiptIcon sx={{ fontSize: { xs: 36, sm: 50 }, color: colors.secondaryNeon }} />, value: expenses.length, label: 'EXPENSES LOGGED', gradient: `linear-gradient(135deg, ${alpha(colors.secondary, 0.2)}, ${alpha(colors.secondaryNeon, 0.1)})`, border: alpha(colors.secondaryNeon, 0.3), color: colors.secondaryNeon },
//                     { icon: <PeopleIcon sx={{ fontSize: { xs: 36, sm: 50 }, color: colors.successNeon }} />, value: members.length, label: 'TOTAL MEMBERS', gradient: `linear-gradient(135deg, ${alpha(colors.success, 0.2)}, ${alpha(colors.successNeon, 0.1)})`, border: alpha(colors.successNeon, 0.3), color: colors.successNeon },
//                   ].map((stat, i) => (
//                     <Grid item xs={12} sm={4} key={i}>
//                       <Paper sx={{ p: { xs: 2, sm: 3 }, textAlign: 'center', borderRadius: 4, background: stat.gradient, border: `1px solid ${stat.border}`, backdropFilter: 'blur(10px)', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
//                         {stat.icon}
//                         <Typography variant="h3" sx={{ fontWeight: 800, color: stat.color, fontSize: { xs: '1.8rem', sm: '2.5rem' } }}>{stat.value}</Typography>
//                         <Typography variant="caption" sx={{ color: colors.textSecondary, fontWeight: 600, letterSpacing: 1, fontSize: { xs: '0.65rem', sm: '0.75rem' } }}>{stat.label}</Typography>
//                       </Paper>
//                     </Grid>
//                   ))}
//                 </Grid>

//                 {/* Expenses Table */}
//                 <Paper sx={{ borderRadius: 4, overflow: 'auto', ...glassCard, '& .MuiTableCell-root': { borderColor: colors.glassBorder, color: colors.textPrimary } }}>
//                   <Table sx={{ minWidth: isMobile ? 600 : 1100 }}>
//                     <TableHead sx={{ background: alpha(colors.primaryNeon, 0.1) }}>
//                       <TableRow>
//                         {['Date', 'Description', 'Amount', 'Paid By', 'Category', 'Split With', "Each Member's Share (₹)", 'Actions'].map((h) => (
//                           <TableCell key={h} sx={{ fontWeight: 700, color: colors.textPrimary, whiteSpace: 'nowrap', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{h}</TableCell>
//                         ))}
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {expenses.map((e) => {
//                         const isEditing = editingExpenseId === e.ExpenseId;
//                         const shares = calculateMemberShares(e);
//                         return (
//                           <TableRow key={e.ExpenseId} sx={{ '&:hover': { background: alpha(colors.glassBg, 0.3) } }}>
//                             {isEditing ? (
//                               <>
//                                 <TableCell>
//                                   <DatePicker value={editExpenseDate} onChange={setEditExpenseDate} slotProps={{ textField: { size: 'small', sx: { width: 130, '& .MuiInputBase-input': { color: 'white' } } } }} />
//                                 </TableCell>
//                                 <TableCell><TextField size="small" value={editDesc} onChange={(x) => setEditDesc(x.target.value)} sx={{ minWidth: 120 }} /></TableCell>
//                                 <TableCell><TextField size="small" type="number" value={editAmount} onChange={(x) => setEditAmount(x.target.value)} sx={{ width: 90 }} /></TableCell>
//                                 <TableCell>
//                                   <Select size="small" value={editPayerId} onChange={(x) => setEditPayerId(x.target.value)} sx={{ minWidth: 100 }}>
//                                     {members.map((m) => <MenuItem key={m.MemberId} value={m.MemberId}>{m.Name}</MenuItem>)}
//                                   </Select>
//                                 </TableCell>
//                                 <TableCell>
//                                   <Select size="small" value={editCategory} onChange={(x) => setEditCategory(x.target.value)}>
//                                     {Object.keys(categoryDisplay).map((k) => <MenuItem key={k} value={k}>{k}</MenuItem>)}
//                                   </Select>
//                                 </TableCell>
//                                 <TableCell>
//                                   <Stack direction="row" flexWrap="wrap">
//                                     {members.map((m) => (
//                                       <FormControlLabel key={m.MemberId} control={<Checkbox size="small" checked={!!editSelectedSplits[m.MemberId]} onChange={() => setEditSelectedSplits((p) => ({ ...p, [m.MemberId]: !p[m.MemberId] }))} />} label={<Typography sx={{ fontSize: '0.75rem' }}>{m.Name}</Typography>} />
//                                     ))}
//                                   </Stack>
//                                 </TableCell>
//                                 <TableCell><Typography variant="caption" color="text.secondary">Will update on save</Typography></TableCell>
//                                 <TableCell align="center">
//                                   <Tooltip title="Save"><IconButton color="success" onClick={() => handleSaveEditExpense(e.ExpenseId)}><SaveIcon /></IconButton></Tooltip>
//                                   <Tooltip title="Cancel"><IconButton color="error" onClick={() => setEditingExpenseId(null)}><CancelIcon /></IconButton></Tooltip>
//                                 </TableCell>
//                               </>
//                             ) : (
//                               <>
//                                 <TableCell>
//                                   <Chip icon={<CalendarTodayIcon sx={{ fontSize: 13 }} />} label={formatDate(e.Date)} size="small" variant="outlined" sx={{ borderColor: colors.glassBorder, color: colors.textPrimary, fontSize: '0.7rem' }} />
//                                 </TableCell>
//                                 <TableCell sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{e.Description}</TableCell>
//                                 <TableCell sx={{ fontWeight: 700, color: colors.successNeon }}>₹{e.Amount.toFixed(2)}</TableCell>
//                                 <TableCell><Chip label={e.Payer} size="small" sx={{ background: getMemberColor(e.Payer), color: 'white', fontWeight: 600 }} /></TableCell>
//                                 <TableCell><Chip icon={getCategoryIcon(e.Category)} label={categoryDisplay[e.Category] || e.Category} size="small" sx={{ background: getCategoryGradient(e.Category), color: 'white', fontWeight: 600, fontSize: '0.7rem' }} /></TableCell>
//                                 <TableCell>
//                                   <Stack direction="row" spacing={0.5} flexWrap="wrap">
//                                     {(e.SplitWith || []).map((name) => <Chip key={name} label={name} size="small" sx={{ background: getMemberColor(name), color: 'white', fontSize: '0.7rem' }} />)}
//                                   </Stack>
//                                 </TableCell>
//                                 <TableCell sx={{ minWidth: 200 }}>
//                                   <Stack spacing={0.5}>
//                                     {Object.entries(shares).map(([member, sd]) => (
//                                       <Tooltip key={member} title={sd.message} arrow placement="left">
//                                         <Chip
//                                           size="small"
//                                           avatar={<Avatar sx={{ bgcolor: getMemberColor(member), width: 22, height: 22, fontSize: '0.65rem' }}>{member[0]}</Avatar>}
//                                           label={sd.role === 'paid' ? `${member}: ₹${sd.amount.toFixed(2)} ✓` : `${member}: ₹${sd.amount.toFixed(2)} → ${sd.owesTo}`}
//                                           sx={{ background: sd.role === 'paid' ? alpha(colors.successNeon, 0.2) : alpha(colors.warning, 0.2), color: sd.role === 'paid' ? colors.successNeon : colors.warning, justifyContent: 'flex-start', '& .MuiChip-label': { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '0.7rem' } }}
//                                         />
//                                       </Tooltip>
//                                     ))}
//                                   </Stack>
//                                 </TableCell>
//                                 <TableCell align="center">
//                                   <Tooltip title="Edit"><IconButton sx={{ color: colors.primaryNeon }} onClick={() => startEditExpense(e)}><EditIcon /></IconButton></Tooltip>
//                                   <Tooltip title="Delete"><IconButton sx={{ color: colors.error }} onClick={() => handleDeleteExpense(e.ExpenseId)}><DeleteIcon /></IconButton></Tooltip>
//                                 </TableCell>
//                               </>
//                             )}
//                           </TableRow>
//                         );
//                       })}
//                       {expenses.length === 0 && (
//                         <TableRow>
//                           <TableCell colSpan={8} align="center" sx={{ py: 8 }}>
//                             <EmojiEmotionsIcon sx={{ fontSize: 60, color: colors.textSecondary, mb: 2, opacity: 0.5 }} />
//                             <Typography variant="h6" color={colors.textSecondary}>No expenses yet. Add your first expense!</Typography>
//                           </TableCell>
//                         </TableRow>
//                       )}
//                     </TableBody>
//                   </Table>
//                 </Paper>
//               </Box>
//             </Fade>
//           )}

//           {/* ─── ANALYTICS TAB ───────────────────────────────────────────── */}
//           {activeTab === 1 && (
//             <Fade in timeout={400}>
//               <Box sx={{ pb: isMobile ? 8 : 0 }}>

//                 {/* Filters */}
//                 <Zoom in timeout={300}>
//                   <Card sx={{ mb: 3, ...glassCard }}>
//                     <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
//                       <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
//                         <SearchIcon sx={{ color: colors.primaryNeon }} /> Filter Expenses
//                       </Typography>
//                       <Grid container spacing={2}>
//                         <Grid item xs={12} sm={6} md={4}>
//                           <DatePicker label="Start Date" value={startDate} onChange={setStartDate} slotProps={{ textField: { fullWidth: true, sx: inputSx } }} />
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={4}>
//                           <DatePicker label="End Date" value={endDate} onChange={setEndDate} slotProps={{ textField: { fullWidth: true, sx: inputSx } }} />
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={4}>
//                           <FormControl fullWidth sx={inputSx}>
//                             <InputLabel>Category</InputLabel>
//                             <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} label="Category">
//                               <MenuItem value="all">All Categories</MenuItem>
//                               {Object.entries(categoryDisplay).map(([k, v]) => <MenuItem key={k} value={k}>{v}</MenuItem>)}
//                             </Select>
//                           </FormControl>
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                           <Button fullWidth variant="outlined" startIcon={<ClearIcon />} onClick={() => { setStartDate(dayjs().startOf('month')); setEndDate(dayjs()); setSelectedCategory('all'); }} sx={{ height: 56, borderColor: colors.primaryNeon, color: colors.primaryNeon, borderRadius: 2 }}>
//                             Clear Filters
//                           </Button>
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                           <Button fullWidth variant="contained" startIcon={<FileDownloadIcon />} onClick={exportToCSV} sx={{ height: 56, background: `linear-gradient(135deg, ${colors.success}, ${colors.successNeon})`, borderRadius: 2 }}>
//                             Export CSV
//                           </Button>
//                         </Grid>
//                       </Grid>
//                     </CardContent>
//                   </Card>
//                 </Zoom>

//                 {/* Summary Stats */}
//                 <Grid container spacing={2} sx={{ mb: 3 }}>
//                   {[
//                     { label: 'Total (Filtered)', value: `₹${totalFilteredAmount.toFixed(2)}`, color: colors.successNeon },
//                     { label: 'Transactions', value: filteredExpenses.length, color: colors.primaryNeon },
//                     { label: 'Categories', value: Object.keys(categorySummary).length, color: colors.warning },
//                     { label: 'Date Range', value: `${startDate.format('DD MMM')} – ${endDate.format('DD MMM')}`, color: colors.textPrimary, small: true },
//                   ].map((s, i) => (
//                     <Grid item xs={6} sm={3} key={i}>
//                       <Paper sx={{ p: { xs: 1.5, sm: 2.5 }, textAlign: 'center', borderRadius: 3, background: alpha(colors.glassBg, 0.5), border: `1px solid ${colors.glassBorder}` }}>
//                         <Typography variant="caption" sx={{ color: colors.textSecondary, display: 'block' }}>{s.label}</Typography>
//                         <Typography variant={s.small ? 'body2' : 'h5'} sx={{ color: s.color, fontWeight: 700, mt: 0.5, fontSize: s.small ? { xs: '0.75rem', sm: '0.9rem' } : { xs: '1.2rem', sm: '1.5rem' } }}>{s.value}</Typography>
//                       </Paper>
//                     </Grid>
//                   ))}
//                 </Grid>

//                 {/* Category Summary */}
//                 <Card sx={{ mb: 3, borderRadius: 4, background: '#ffffff15', backdropFilter: 'blur(10px)', border: `1px solid ${colors.glassBorder}` }}>
//                   <CardContent sx={{ p: { xs: 1.5, sm: 3 } }}>
//                     <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.textPrimary }}>📊 Category-wise Summary</Typography>
//                     <Box sx={{ overflowX: 'auto' }}>
//                       <Table size={isMobile ? 'small' : 'medium'}>
//                         <TableHead>
//                           <TableRow>
//                             {['Category', 'Count', 'Total (₹)', 'Average'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, whiteSpace: 'nowrap', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{h}</TableCell>)}
//                           </TableRow>
//                         </TableHead>
//                         <TableBody>
//                           {Object.entries(categorySummary).map(([cat, data]) => (
//                             <TableRow key={cat}>
//                               <TableCell><Chip icon={getCategoryIcon(cat)} label={isMobile ? cat : (categoryDisplay[cat] || cat)} size="small" sx={{ background: getCategoryGradient(cat), color: 'white', fontSize: '0.7rem' }} /></TableCell>
//                               <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{data.count}</TableCell>
//                               <TableCell sx={{ color: colors.successNeon, fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>₹{data.total.toFixed(2)}</TableCell>
//                               <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>₹{(data.total / data.count).toFixed(2)}</TableCell>
//                             </TableRow>
//                           ))}
//                         </TableBody>
//                       </Table>
//                     </Box>
//                   </CardContent>
//                 </Card>

//                 {/* Member Summary */}
//                 <Card sx={{ mb: 3, borderRadius: 4, background: '#ffffff15', backdropFilter: 'blur(10px)', border: `1px solid ${colors.glassBorder}` }}>
//                   <CardContent sx={{ p: { xs: 1.5, sm: 3 } }}>
//                     <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.textPrimary }}>👥 Member Summary</Typography>
//                     <Box sx={{ overflowX: 'auto' }}>
//                       <Table size={isMobile ? 'small' : 'medium'}>
//                         <TableHead>
//                           <TableRow>
//                             {['Member', 'Payments', 'Total Paid', 'Avg', 'Action'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{h}</TableCell>)}
//                           </TableRow>
//                         </TableHead>
//                         <TableBody>
//                           {members.map((member) => {
//                             const s = memberSummary[member.Name] || { total: 0, count: 0 };
//                             return (
//                               <TableRow key={member.MemberId}>
//                                 <TableCell>
//                                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                                     <Avatar sx={{ background: getMemberColor(member.Name), width: 28, height: 28, fontSize: '0.8rem' }}>{member.Name[0]}</Avatar>
//                                     <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{member.Name}</Typography>
//                                   </Box>
//                                 </TableCell>
//                                 <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{s.count}</TableCell>
//                                 <TableCell sx={{ color: colors.successNeon, fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>₹{s.total.toFixed(2)}</TableCell>
//                                 <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>₹{s.count > 0 ? (s.total / s.count).toFixed(2) : '0'}</TableCell>
//                                 <TableCell>
//                                   <Button size="small" variant="outlined" startIcon={isMobile ? null : <PersonIcon />} onClick={() => setSelectedDetailMember(selectedDetailMember === member.Name ? 'all' : member.Name)} sx={{ borderColor: colors.primaryNeon, color: colors.primaryNeon, fontSize: { xs: '0.65rem', sm: '0.75rem' }, minWidth: 0, px: { xs: 1, sm: 2 } }}>
//                                     {selectedDetailMember === member.Name ? 'Hide' : 'Details'}
//                                   </Button>
//                                 </TableCell>
//                               </TableRow>
//                             );
//                           })}
//                         </TableBody>
//                       </Table>
//                     </Box>
//                   </CardContent>
//                 </Card>

//                 {/* Member Detail */}
//                 {selectedDetailMember !== 'all' && (() => {
//                   const { totalPaid, totalOwed, totalShouldPay, netBalance, details } = getMemberTotals(selectedDetailMember);
//                   return (
//                     <Zoom in>
//                       <Card sx={{ mb: 3, borderRadius: 4, background: `linear-gradient(135deg, ${alpha(colors.primaryNeon, 0.1)}, ${alpha(colors.secondaryNeon, 0.1)})`, border: `2px solid ${colors.primaryNeon}` }}>
//                         <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
//                           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                               <Avatar sx={{ background: getMemberColor(selectedDetailMember), width: { xs: 45, sm: 60 }, height: { xs: 45, sm: 60 }, fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 'bold' }}>{selectedDetailMember[0]}</Avatar>
//                               <Box>
//                                 <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, fontSize: { xs: '1rem', sm: '1.25rem' } }}>{selectedDetailMember}'s Details</Typography>
//                                 <Typography variant="caption" color="text.secondary">All expenses involving {selectedDetailMember}</Typography>
//                               </Box>
//                             </Box>
//                             <Button variant="contained" startIcon={<ClearIcon />} onClick={() => setSelectedDetailMember('all')} sx={{ background: colors.error }}>Close</Button>
//                           </Box>

//                           <Grid container spacing={2} sx={{ mb: 3 }}>
//                             {[
//                               { label: 'Total Paid', value: totalPaid, color: colors.successNeon },
//                               { label: 'Total Owed', value: totalOwed, color: colors.warning },
//                               { label: 'Should Pay', value: totalShouldPay, color: colors.info },
//                               { label: 'Net Balance', value: netBalance, color: netBalance >= 0 ? colors.successNeon : colors.error, prefix: netBalance >= 0 ? '+' : '' },
//                             ].map((s, i) => (
//                               <Grid item xs={6} sm={3} key={i}>
//                                 <Paper sx={{ p: { xs: 1.5, sm: 2 }, textAlign: 'center', background: alpha(s.color, 0.1) }}>
//                                   <Typography variant="caption" color="gray" sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem' } }}>{s.label}</Typography>
//                                   <Typography variant="h6" sx={{ color: s.color, fontWeight: 700, fontSize: { xs: '1rem', sm: '1.25rem' } }}>{s.prefix || ''}₹{Math.abs(s.value).toFixed(2)}</Typography>
//                                 </Paper>
//                               </Grid>
//                             ))}
//                           </Grid>

//                           <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.textPrimary }}>📋 Expense Breakdown</Typography>
//                           <Box sx={{ overflowX: 'auto' }}>
//                             <Table size={isMobile ? 'small' : 'medium'}>
//                               <TableHead>
//                                 <TableRow sx={{ background: alpha(colors.primaryNeon, 0.2) }}>
//                                   {['Date', 'Description', 'Total', 'Paid By', 'Share', 'Role', 'Split With'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, whiteSpace: 'nowrap', fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>{h}</TableCell>)}
//                                 </TableRow>
//                               </TableHead>
//                               <TableBody>
//                                 {details.map((d, idx) => (
//                                   <TableRow key={idx}>
//                                     <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>{formatDate(d.date)}</TableCell>
//                                     <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>{d.description}</TableCell>
//                                     <TableCell sx={{ color: colors.primaryNeon, fontWeight: 600, fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>₹{d.totalAmount.toFixed(2)}</TableCell>
//                                     <TableCell><Chip label={d.paidBy} size="small" sx={{ background: getMemberColor(d.paidBy), color: 'white', fontSize: '0.65rem' }} /></TableCell>
//                                     <TableCell sx={{ color: d.role === 'paid' ? colors.successNeon : colors.warning, fontWeight: 600, fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>₹{d.memberShare.toFixed(2)}</TableCell>
//                                     <TableCell><Chip label={d.role === 'paid' ? 'Paid' : 'Owes'} size="small" sx={{ background: d.role === 'paid' ? colors.successNeon : colors.warning, color: 'white', fontSize: '0.65rem' }} /></TableCell>
//                                     <TableCell><Stack direction="row" spacing={0.5} flexWrap="wrap">{d.splitWith.map((n) => <Chip key={n} label={n} size="small" sx={{ background: getMemberColor(n), color: 'white', fontSize: '0.65rem' }} />)}</Stack></TableCell>
//                                   </TableRow>
//                                 ))}
//                                 {details.length === 0 && <TableRow><TableCell colSpan={7} align="center"><Typography color="text.secondary">No expenses found</Typography></TableCell></TableRow>}
//                               </TableBody>
//                             </Table>
//                           </Box>
//                         </CardContent>
//                       </Card>
//                     </Zoom>
//                   );
//                 })()}

//                 {/* Grouped Expenses */}
//                 <Card sx={{ borderRadius: 4, ...glassCard }}>
//                   <CardContent sx={{ p: { xs: 1.5, sm: 3 } }}>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, gap: 2, flexWrap: 'wrap' }}>
//                       <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, fontSize: { xs: '0.95rem', sm: '1.1rem' } }}>
//                         📅 {viewType === 'daily' ? 'Daily' : viewType === 'weekly' ? 'Weekly' : 'Monthly'} Breakdown
//                       </Typography>
//                       <FormControl size="small" sx={{ minWidth: 110, ...inputSx }}>
//                         <Select value={viewType} onChange={(e) => setViewType(e.target.value)}>
//                           <MenuItem value="daily">Daily</MenuItem>
//                           <MenuItem value="weekly">Weekly</MenuItem>
//                           <MenuItem value="monthly">Monthly</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Box>
//                     {groupedExpenses.map((group, idx) => (
//                       <Paper key={idx} sx={{ mb: 2, p: { xs: 1.5, sm: 2 }, background: alpha(colors.glassBg, 0.3), borderRadius: 3 }}>
//                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
//                           <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.primaryNeon }}>
//                             {viewType === 'daily' ? group.date.format('DD MMMM YYYY') : viewType === 'weekly' ? `Week ${group.key.split('-W')[1]} – ${group.date.format('MMM YYYY')}` : group.date.format('MMMM YYYY')}
//                           </Typography>
//                           <Chip label={`₹${group.total.toFixed(2)}`} size="small" sx={{ bgcolor: alpha(colors.successNeon, 0.2), color: colors.successNeon, fontWeight: 600 }} />
//                         </Box>
//                         <Box sx={{ overflowX: 'auto' }}>
//                           <Table size="small">
//                             <TableHead>
//                               <TableRow>
//                                 {['Date', 'Description', 'Amount', 'Paid By', 'Category'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{h}</TableCell>)}
//                               </TableRow>
//                             </TableHead>
//                             <TableBody>
//                               {group.items.map((exp, i) => (
//                                 <TableRow key={i}>
//                                   <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{formatDate(exp.Date)}</TableCell>
//                                   <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{exp.Description}</TableCell>
//                                   <TableCell sx={{ color: colors.successNeon, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>₹{exp.Amount.toFixed(2)}</TableCell>
//                                   <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{exp.Payer}</TableCell>
//                                   <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{exp.Category}</TableCell>
//                                 </TableRow>
//                               ))}
//                             </TableBody>
//                           </Table>
//                         </Box>
//                       </Paper>
//                     ))}
//                     {groupedExpenses.length === 0 && <Box sx={{ textAlign: 'center', py: 4 }}><Typography color="text.secondary">No expenses for selected filters.</Typography></Box>}
//                   </CardContent>
//                 </Card>
//               </Box>
//             </Fade>
//           )}

//           {/* ─── BALANCES TAB ────────────────────────────────────────────── */}
//           {activeTab === 2 && (
//             <Fade in timeout={400}>
//               <Box sx={{ pb: isMobile ? 8 : 0 }}>
//                 <Paper sx={{ borderRadius: 4, overflow: 'auto', ...glassCard, '& .MuiTableCell-root': { borderColor: colors.glassBorder, color: colors.textPrimary } }}>
//                   <Table size={isMobile ? 'small' : 'medium'}>
//                     <TableHead sx={{ background: alpha(colors.primaryNeon, 0.1) }}>
//                       <TableRow>
//                         {['Member', 'Total Paid (₹)', 'Total Share (₹)', 'Net Balance (₹)'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, whiteSpace: 'nowrap', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{h}</TableCell>)}
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {members.map((m) => {
//                         const bal = memberBalances[m.Name] || { paid: 0, share: 0, net: 0 };
//                         return (
//                           <TableRow key={m.MemberId}>
//                             <TableCell>
//                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
//                                 <Avatar sx={{ background: getAvatarGradient(m.Name), width: { xs: 34, sm: 45 }, height: { xs: 34, sm: 45 }, fontWeight: 700, color: 'white', fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>{m.Name[0]}</Avatar>
//                                 <Typography fontWeight={700} sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }}>{m.Name}</Typography>
//                               </Box>
//                             </TableCell>
//                             <TableCell sx={{ fontWeight: 600, color: colors.successNeon, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>₹{bal.paid.toFixed(2)}</TableCell>
//                             <TableCell sx={{ fontWeight: 600, color: colors.warning, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>₹{bal.share.toFixed(2)}</TableCell>
//                             <TableCell>
//                               <Chip
//                                 icon={bal.net >= 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
//                                 label={`${bal.net >= 0 ? '+' : ''}₹${bal.net.toFixed(2)}`}
//                                 size={isMobile ? 'small' : 'medium'}
//                                 sx={{ background: bal.net >= 0 ? `linear-gradient(135deg, ${colors.success}, ${colors.successNeon})` : `linear-gradient(135deg, ${colors.error}, ${colors.secondaryNeon})`, color: 'white', fontWeight: 700, '& .MuiChip-icon': { color: 'white' } }}
//                               />
//                             </TableCell>
//                           </TableRow>
//                         );
//                       })}
//                     </TableBody>
//                   </Table>
//                   <Box sx={{ p: 2, bgcolor: alpha(colors.warning, 0.1), m: 2, borderRadius: 2 }}>
//                     <Typography variant="caption" sx={{ color: colors.textSecondary }}>
//                       💡 <strong>Balances:</strong>{' '}
//                       <span style={{ color: colors.successNeon }}>+₹ = Owed money</span> &nbsp;|&nbsp;
//                       <span style={{ color: colors.error }}>-₹ = Owes money</span>
//                     </Typography>
//                   </Box>
//                 </Paper>
//               </Box>
//             </Fade>
//           )}

//           {/* ─── SETTLE UP TAB ───────────────────────────────────────────── */}
//           {activeTab === 3 && (
//             <Fade in timeout={400}>
//               <Box sx={{ pb: isMobile ? 8 : 0 }}>
//                 <Card sx={{ borderRadius: 4, ...glassCard }}>
//                   <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
//                     <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
//                       <StarsIcon sx={{ color: colors.successNeon }} /> Settlement Plan
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 3 }}>Direct payments to clear all debts</Typography>

//                     {settlements.length === 0 ? (
//                       <Box sx={{ textAlign: 'center', py: 6 }}>
//                         <CheckCircleIcon sx={{ fontSize: { xs: 60, sm: 80 }, color: colors.successNeon, mb: 2 }} />
//                         <Typography variant="h5" sx={{ color: colors.successNeon, fontWeight: 700, mb: 1, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>All settled up! 🎉</Typography>
//                         <Typography variant="body1" sx={{ color: colors.textSecondary }}>Everyone is balanced. Great job!</Typography>
//                       </Box>
//                     ) : (
//                       <Stack spacing={2}>
//                         {settlements.map((s, i) => (
//                           <Slide direction="left" in timeout={400 + i * 100} key={i}>
//                             <Paper sx={{ p: { xs: 2, sm: 2.5 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: 3, background: alpha(colors.glassBg, 0.5), border: `1px solid ${colors.glassBorder}`, flexWrap: 'wrap', gap: 1, '&:hover': { transform: 'translateX(6px)', transition: 'transform 0.3s' } }}>
//                               <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap' }}>
//                                 <Avatar sx={{ background: getMemberColor(s.from), width: { xs: 34, sm: 42 }, height: { xs: 34, sm: 42 }, fontWeight: 700 }}>{s.from[0]}</Avatar>
//                                 <Typography sx={{ color: colors.textPrimary, fontWeight: 600, fontSize: { xs: '0.85rem', sm: '1rem' } }}>pays</Typography>
//                                 <Typography sx={{ fontWeight: 800, background: `linear-gradient(135deg, ${colors.primaryNeon}, ${colors.successNeon})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>₹{s.amount.toFixed(2)}</Typography>
//                                 <Typography sx={{ color: colors.textPrimary, fontWeight: 600, fontSize: { xs: '0.85rem', sm: '1rem' } }}>to</Typography>
//                                 <Avatar sx={{ background: getMemberColor(s.to), width: { xs: 34, sm: 42 }, height: { xs: 34, sm: 42 }, fontWeight: 700 }}>{s.to[0]}</Avatar>
//                                 <Typography sx={{ color: colors.textPrimary, fontWeight: 600, fontSize: { xs: '0.85rem', sm: '1rem' } }}>{s.to}</Typography>
//                               </Box>
//                               <Chip label={`#${i + 1}`} size="small" sx={{ background: colors.primaryNeon, color: 'white', fontWeight: 700 }} />
//                             </Paper>
//                           </Slide>
//                         ))}
//                       </Stack>
//                     )}
//                   </CardContent>
//                 </Card>
//               </Box>
//             </Fade>
//           )}

//         </Container>

//         {/* Snackbar */}
//         <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar((s) => ({ ...s, open: false }))} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} sx={{ mb: isMobile ? 8 : 0 }}>
//           <Alert severity={snackbar.severity} sx={{ borderRadius: 3, boxShadow: 3, fontWeight: 500, background: colors.glassBg, backdropFilter: 'blur(10px)', color: colors.textPrimary }}>
//             {snackbar.message}
//           </Alert>
//         </Snackbar>

//         <style>{`
//           @keyframes float {
//             0%, 100% { transform: translate(0,0) rotate(0deg); }
//             50% { transform: translate(20px,-20px) rotate(180deg); }
//           }
//           .MuiPickersDay-root { color: white !important; }
//           .MuiPickersYear-yearButton { color: white !important; }
//           .MuiPickersMonth-monthButton { color: white !important; }
//           .MuiPickersPopper-paper { background-color: #1e293b !important; }
//           .MuiPickersDay-root.Mui-selected { background-color: #6366f1 !important; }
//           .MuiDialog-container .MuiPaper-root { background-color: #1e293b !important; }
//           .MuiPickersToolbar-root { background-color: #6366f1 !important; }
//         `}</style>
//       </Box>
//     </LocalizationProvider>
//   );
// }

// import { useState, useEffect } from 'react';
// import {
//   Container, Tabs, Tab, Box, Typography, Card, CardContent, Grid,
//   Button, TextField, Select, MenuItem, InputLabel, FormControl,
//   FormGroup, FormControlLabel, Checkbox, Table, TableBody, TableCell,
//   TableHead, TableRow, Paper, Chip, IconButton, Avatar, Divider,
//   Fade, Zoom, Grow, Slide, alpha, Stack,
//   Tooltip, Alert, Snackbar, CircularProgress, useMediaQuery, useTheme,
// } from '@mui/material';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import ReceiptIcon from '@mui/icons-material/Receipt';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Cancel';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import TrendingDownIcon from '@mui/icons-material/TrendingDown';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import HomeIcon from '@mui/icons-material/Home';
// import CategoryIcon from '@mui/icons-material/Category';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import TrainIcon from '@mui/icons-material/Train';
// import WeekendIcon from '@mui/icons-material/Weekend';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import PeopleIcon from '@mui/icons-material/People';
// import StarsIcon from '@mui/icons-material/Stars';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';
// import PersonIcon from '@mui/icons-material/Person';

// import axios from 'axios';

// // ─── Color Palette ───────────────────────────────────────────────────────────
// const colors = {
//   primary: '#6366f1',
//   primaryNeon: '#a855f7',
//   secondary: '#ec4899',
//   secondaryNeon: '#f43f5e',
//   success: '#10b981',
//   successNeon: '#06b6d4',
//   warning: '#f59e0b',
//   error: '#ef4444',
//   info: '#3b82f6',
//   purple: '#8b5cf6',
//   orange: '#f97316',
//   teal: '#14b8a6',
//   cyan: '#06b6d4',
//   pink: '#d946ef',
//   background: '#0f172a',
//   backgroundLight: '#1e293b',
//   cardBg: 'rgba(30, 41, 59, 0.8)',
//   textPrimary: '#f1f5f9',
//   textSecondary: '#94a3b8',
//   glassBorder: 'rgba(255,255,255,0.1)',
//   glassBg: 'rgba(83, 57, 57, 0.05)',
// };

// const memberColors = {
//   0: '#64748b', 1: '#fda4af', 2: '#fbbf24', 3: '#024532', 4: '#737373',
//   5: '#78716c', 6: '#0ea5e9', 7: '#8b5cf6', 8: '#84cc16', 9: '#c026d3',
//   10: '#2563eb', 11: '#0f766e', 12: '#fb923c', 13: '#818cf8', 14: '#eab308',
// };

// const getMemberColor = (name) => {
//   if (!name) return colors.primary;
//   let hash = 0;
//   for (let i = 0; i < name.length; i++) {
//     hash = (hash + name.charCodeAt(i)) % Object.keys(memberColors).length;
//   }
//   return memberColors[hash];
// };

// const categoryDisplay = {
//   food: 'Food & Dining 🍔',
//   grocery: 'Groceries 🥕',
//   transport: 'Transport 🚌',
//   accommodation: 'Accommodation 🏠',
//   entertainment: 'Entertainment 🎬',
// };

// // ─── Shared input sx ─────────────────────────────────────────────────────────
// const inputSx = {
//   width: '100%',
//   background: '#ffffff1f',
//   borderRadius: '10px',
//   '& .MuiOutlinedInput-root': {
//     borderRadius: '10px',
//     color: colors.textPrimary,
//     '& fieldset': { borderColor: colors.glassBorder },
//     '&:hover fieldset': { borderColor: alpha(colors.primaryNeon, 0.5) },
//     '&.Mui-focused fieldset': { borderColor: colors.primaryNeon },
//   },
//   '& .MuiInputLabel-root': { color: colors.textSecondary },
//   '& .MuiInputBase-input': { color: `${colors.textPrimary} !important` },
//   '& .MuiSelect-icon': { color: colors.textSecondary },
// };

// // ─── Helpers ─────────────────────────────────────────────────────────────────
// const getAvatarGradient = (name) => {
//   const c = getMemberColor(name);
//   return `linear-gradient(135deg, ${c}, ${c}cc)`;
// };

// const getCategoryIcon = (cat) => {
//   const s = { fontSize: 18, color: 'white !important' };
//   switch (cat) {
//     case 'food': return <FastfoodIcon sx={s} />;
//     case 'grocery': return <ShoppingCartIcon sx={s} />;
//     case 'transport': return <TrainIcon sx={s} />;
//     case 'accommodation': return <HomeIcon sx={s} />;
//     case 'entertainment': return <WeekendIcon sx={s} />;
//     default: return <CategoryIcon sx={s} />;
//   }
// };

// const getCategoryGradient = (cat) => {
//   switch (cat) {
//     case 'food': return `linear-gradient(135deg, ${colors.orange}, #ea580c)`;
//     case 'grocery': return `linear-gradient(135deg, ${colors.teal}, #0d9488)`;
//     case 'transport': return `linear-gradient(135deg, ${colors.info}, #2563eb)`;
//     case 'accommodation': return `linear-gradient(135deg, ${colors.purple}, #7c3aed)`;
//     case 'entertainment': return `linear-gradient(135deg, ${colors.pink}, #c026d3)`;
//     default: return `linear-gradient(135deg, ${colors.primary}, ${colors.primaryNeon})`;
//   }
// };

// const formatDate = (d) => {
//   if (!d) return 'No date';
//   const dt = dayjs(d);
//   return dt.isValid() ? dt.format('DD MMM YYYY') : 'Invalid date';
// };

// // ─── Tab definitions ──────────────────────────────────────────────────────────
// const TABS = [
//   { label: 'Expenses', icon: <ReceiptIcon /> },
//   { label: 'Analytics', icon: <AnalyticsIcon /> },
//   { label: 'Balances', icon: <AccountBalanceWalletIcon /> },
//   { label: 'Settle Up', icon: <TrendingUpIcon /> },
// ];

// // ═══════════════════════════════════════════════════════════════════════════════
// export default function App() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.down('md'));

//   const [activeTab, setActiveTab] = useState(0);
//   const [members, setMembers] = useState([]);
//   const [expenses, setExpenses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

//   // Analytics
//   const [startDate, setStartDate] = useState(dayjs().startOf('month'));
//   const [endDate, setEndDate] = useState(dayjs());
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [viewType, setViewType] = useState('daily');
//   const [selectedDetailMember, setSelectedDetailMember] = useState('all');

//   // Add Expense
//   const [newMember, setNewMember] = useState('');
//   const [desc, setDesc] = useState('');
//   const [amount, setAmount] = useState('');
//   const [payer, setPayer] = useState('');
//   const [category, setCategory] = useState('food');
//   const [expenseDate, setExpenseDate] = useState(dayjs());
//   const [selectedSplits, setSelectedSplits] = useState({});

//   // Edit Expense
//   const [editingExpenseId, setEditingExpenseId] = useState(null);
//   const [editDesc, setEditDesc] = useState('');
//   const [editAmount, setEditAmount] = useState('');
//   const [editPayerId, setEditPayerId] = useState('');
//   const [editCategory, setEditCategory] = useState('food');
//   const [editExpenseDate, setEditExpenseDate] = useState(dayjs());
//   const [editSelectedSplits, setEditSelectedSplits] = useState({});

//   const showNotification = (message, severity = 'success') =>
//     setSnackbar({ open: true, message, severity });

//   useEffect(() => {
//     (async () => {
//       setLoading(true);
//       try {
//         const memRes = await axios.get('http://localhost:5000/api/members');
//         const expRes = await axios.get('http://localhost:5000/api/expenses');
//         setMembers(memRes.data);
//         setExpenses(expRes.data);
//         const checks = {};
//         memRes.data.forEach((m) => { checks[m.MemberId] = true; });
//         setSelectedSplits(checks);
//       } catch {
//         showNotification('Failed to load data', 'error');
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   const refreshData = async () => {
//     try {
//       const memRes = await axios.get('http://localhost:5000/api/members');
//       const expRes = await axios.get('http://localhost:5000/api/expenses');
//       setMembers(memRes.data);
//       setExpenses(expRes.data);
//     } catch {
//       showNotification('Failed to refresh data', 'error');
//     }
//   };

//   // ─── Business logic (unchanged) ──────────────────────────────────────────
//   const calculateMemberShares = (expense) => {
//     const shares = {};
//     const splitWith = expense.SplitWith || [];
//     const pd = expense.Payer;
//     const total = expense.Amount;
//     const n = splitWith.length;
//     if (n > 0) {
//       const share = total / n;
//       splitWith.forEach((person) => {
//         if (person === pd) {
//           shares[person] = { amount: share, role: 'paid', owesTo: null, message: `${person} paid ₹${total.toFixed(2)} — share ₹${share.toFixed(2)}` };
//         } else {
//           shares[person] = { amount: share, role: 'owes', owesTo: pd, message: `${person} owes ₹${share.toFixed(2)} to ${pd}` };
//         }
//       });
//     }
//     return shares;
//   };

//   const filteredExpenses = expenses.filter((exp) => {
//     if (!exp.Date) return false;
//     const d = dayjs(exp.Date);
//     return (
//       (!startDate || d.isAfter(startDate.subtract(1, 'day'))) &&
//       (!endDate || d.isBefore(endDate.add(1, 'day'))) &&
//       (selectedCategory === 'all' || exp.Category === selectedCategory)
//     );
//   });

//   const getMemberExpenseDetails = (memberName) => {
//     const details = [];
//     expenses.forEach((expense) => {
//       const splitWith = expense.SplitWith || [];
//       const pd = expense.Payer;
//       const amt = expense.Amount;
//       const n = splitWith.length;
//       if (splitWith.includes(memberName) || pd === memberName) {
//         const share = n > 0 ? amt / n : 0;
//         details.push({
//           expenseId: expense.ExpenseId,
//           date: expense.Date,
//           description: expense.Description,
//           totalAmount: amt,
//           paidBy: pd,
//           memberShare: share,
//           role: pd === memberName ? 'paid' : 'owes',
//           category: expense.Category,
//           splitWith,
//         });
//       }
//     });
//     return details;
//   };

//   const getMemberTotals = (memberName) => {
//     const details = getMemberExpenseDetails(memberName);
//     let totalPaid = 0, totalOwed = 0, totalShouldPay = 0;
//     details.forEach((d) => {
//       if (d.role === 'paid') { totalPaid += d.totalAmount; totalShouldPay += d.memberShare; }
//       else { totalOwed += d.memberShare; totalShouldPay += d.memberShare; }
//     });
//     return { totalPaid, totalOwed, totalShouldPay, netBalance: totalPaid - totalShouldPay, details };
//   };

//   const getGroupedExpenses = () => {
//     const groups = {};
//     filteredExpenses.forEach((exp) => {
//       const date = dayjs(exp.Date);
//       const key = viewType === 'daily' ? date.format('YYYY-MM-DD')
//         : viewType === 'weekly' ? `${date.year()}-W${date.week()}`
//         : date.format('YYYY-MM');
//       if (!groups[key]) groups[key] = { total: 0, items: [], date };
//       groups[key].total += exp.Amount;
//       groups[key].items.push(exp);
//     });
//     return Object.entries(groups)
//       .sort((a, b) => a[1].date.isBefore(b[1].date) ? -1 : 1)
//       .map(([key, val]) => ({ key, ...val }));
//   };

//   const categorySummary = filteredExpenses.reduce((acc, exp) => {
//     if (!acc[exp.Category]) acc[exp.Category] = { total: 0, count: 0 };
//     acc[exp.Category].total += exp.Amount;
//     acc[exp.Category].count += 1;
//     return acc;
//   }, {});

//   const memberSummary = filteredExpenses.reduce((acc, exp) => {
//     if (!acc[exp.Payer]) acc[exp.Payer] = { total: 0, count: 0 };
//     acc[exp.Payer].total += exp.Amount;
//     acc[exp.Payer].count += 1;
//     return acc;
//   }, {});

//   const totalFilteredAmount = filteredExpenses.reduce((s, e) => s + e.Amount, 0);
//   const totalSpent = expenses.reduce((s, e) => s + e.Amount, 0);

//   const computeBalances = () => {
//     const b = {};
//     members.forEach((m) => { b[m.Name] = { paid: 0, share: 0, net: 0 }; });
//     expenses.forEach((exp) => {
//       const pd = exp.Payer;
//       const splitWith = exp.SplitWith || [];
//       const n = splitWith.length;
//       if (b[pd]) b[pd].paid += exp.Amount;
//       if (n > 0) {
//         const share = exp.Amount / n;
//         splitWith.forEach((p) => { if (b[p]) b[p].share += share; });
//       }
//     });
//     Object.keys(b).forEach((n) => { b[n].net = b[n].paid - b[n].share; });
//     return b;
//   };

//   const computeSettlements = () => {
//     const txns = [];
//     expenses.forEach((exp) => {
//       const pd = exp.Payer;
//       const splitWith = exp.SplitWith || [];
//       const n = splitWith.length;
//       if (n > 0) {
//         const share = exp.Amount / n;
//         splitWith.forEach((p) => { if (p !== pd) txns.push({ from: p, to: pd, amount: share }); });
//       }
//     });
//     const map = new Map();
//     txns.forEach((t) => {
//       const key = `${t.from}|${t.to}`;
//       map.set(key, (map.get(key) || 0) + t.amount);
//     });
//     let list = Array.from(map.entries()).map(([k, a]) => {
//       const [from, to] = k.split('|');
//       return { from, to, amount: Math.round(a * 100) / 100 };
//     }).filter((t) => t.amount > 0.01);
//     let changed = true;
//     while (changed) {
//       changed = false;
//       for (let i = 0; i < list.length; i++) {
//         for (let j = i + 1; j < list.length; j++) {
//           if (list[i].from === list[j].to && list[i].to === list[j].from) {
//             const a = list[i].amount, b = list[j].amount;
//             if (a > b) { list[i].amount = a - b; list.splice(j, 1); }
//             else if (b > a) { list[j].amount = b - a; list.splice(i, 1); }
//             else { list.splice(i, 1); list.splice(j - 1, 1); }
//             changed = true; break;
//           }
//         }
//         if (changed) break;
//       }
//     }
//     return list.filter((t) => t.amount > 0.01).sort((a, b) => b.amount - a.amount);
//   };

//   const memberBalances = computeBalances();
//   const settlements = computeSettlements();
//   const groupedExpenses = getGroupedExpenses();

//   const exportToCSV = () => {
//     const headers = ['Date', 'Description', 'Amount', 'Paid By', 'Category', 'Split With'];
//     const rows = filteredExpenses.map((exp) => [exp.Date, exp.Description, exp.Amount, exp.Payer, exp.Category, (exp.SplitWith || []).join(', ')]);
//     const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
//     const a = document.createElement('a');
//     a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
//     a.download = `expenses_${dayjs().format('YYYY-MM-DD')}.csv`;
//     a.click();
//     showNotification('Exported successfully! 📊');
//   };

//   const handleAddMember = async () => {
//     if (!newMember.trim()) return;
//     try {
//       await axios.post('http://localhost:5000/api/members', { name: newMember });
//       setNewMember('');
//       await refreshData();
//       showNotification(`${newMember} joined the hostel! 🎉`);
//     } catch { showNotification('Failed to add member', 'error'); }
//   };

//   const handleDeleteMember = async (id, name) => {
//     if (!window.confirm(`Remove ${name} from the hostel?`)) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/members/${id}`);
//       await refreshData();
//       showNotification(`${name} left the hostel 👋`, 'info');
//     } catch { showNotification('Failed to delete member', 'error'); }
//   };

//   const handleAddExpense = async () => {
//     const splitIds = Object.keys(selectedSplits).filter((id) => selectedSplits[id]).map(Number);
//     if (!desc.trim() || !amount || !payer || splitIds.length === 0) {
//       showNotification('Please fill all fields and select at least one person to split with', 'warning');
//       return;
//     }
//     try {
//       await axios.post('http://localhost:5000/api/expenses', {
//         description: desc, amount: parseFloat(amount), payerId: parseInt(payer),
//         category, splitMemberIds: splitIds, date: expenseDate.format('YYYY-MM-DD'),
//       });
//       setDesc(''); setAmount(''); setPayer(''); setExpenseDate(dayjs());
//       await refreshData();
//       showNotification('Expense added successfully! 💰');
//     } catch { showNotification('Failed to add expense', 'error'); }
//   };

//   const startEditExpense = (expense) => {
//     setEditingExpenseId(expense.ExpenseId);
//     setEditDesc(expense.Description);
//     setEditAmount(expense.Amount);
//     setEditCategory(expense.Category);
//     setEditExpenseDate(expense.Date ? dayjs(expense.Date) : dayjs());
//     const matched = members.find((m) => m.Name === expense.Payer);
//     setEditPayerId(matched ? matched.MemberId : '');
//     const map = {};
//     members.forEach((m) => { map[m.MemberId] = Array.isArray(expense.SplitWith) && expense.SplitWith.includes(m.Name); });
//     setEditSelectedSplits(map);
//   };

//   const handleSaveEditExpense = async (expenseId) => {
//     const splitIds = Object.keys(editSelectedSplits).filter((id) => editSelectedSplits[id]).map(Number);
//     if (!editDesc.trim() || !editAmount || !editPayerId || splitIds.length === 0) {
//       showNotification('Please fill all fields', 'warning'); return;
//     }
//     try {
//       await axios.put(`http://localhost:5000/api/expenses/${expenseId}`, {
//         description: editDesc, amount: parseFloat(editAmount), payerId: parseInt(editPayerId),
//         category: editCategory, splitMemberIds: splitIds, date: editExpenseDate.format('YYYY-MM-DD'),
//       });
//       setEditingExpenseId(null);
//       await refreshData();
//       showNotification('Expense updated! ✏️');
//     } catch { showNotification('Failed to update expense', 'error'); }
//   };

//   const handleDeleteExpense = async (id) => {
//     if (!window.confirm('Permanently delete this bill?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/expenses/${id}`);
//       await refreshData();
//       showNotification('Expense deleted 🗑️');
//     } catch { showNotification('Failed to delete expense', 'error'); }
//   };

//   // ─── Shared card sx ────────────────────────────────────────────────────────
//   const glassCard = {
//     borderRadius: 4,
//     background: colors.glassBg,
//     backdropFilter: 'blur(10px)',
//     border: `1px solid ${colors.glassBorder}`,
//   };

//   const hoverLift = {
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     '&:hover': { transform: 'translateY(-5px)', boxShadow: `0 20px 40px ${alpha(colors.primaryNeon, 0.2)}` },
//   };

//   // ─── Loading screen ────────────────────────────────────────────────────────
//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: colors.background }}>
//         <CircularProgress sx={{ color: colors.primaryNeon }} />
//       </Box>
//     );
//   }



//   // ════════════════════════════════════════════════════════════════════════════
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{ minHeight: '100vh', background: `radial-gradient(circle at 0% 0%, ${colors.background} 0%, ${colors.backgroundLight} 100%)`, position: 'relative', overflow: 'hidden' }}>

//         {/* Ambient blobs */}
//         <Box sx={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
//           <Box sx={{ position: 'absolute', top: '10%', left: '5%', width: 300, height: 300, background: `radial-gradient(circle, ${alpha(colors.primaryNeon, 0.1)} 0%, transparent 70%)`, borderRadius: '50%', animation: 'float 20s infinite' }} />
//           <Box sx={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, background: `radial-gradient(circle, ${alpha(colors.secondaryNeon, 0.1)} 0%, transparent 70%)`, borderRadius: '50%', animation: 'float 25s infinite reverse' }} />
//         </Box>

//         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 2, sm: 4 }, px: { xs: 1.5, sm: 3 } }}>

//           {/* Header */}
//           <Slide direction="down" in timeout={400}>
//             <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 5 } }}>
//               <Typography variant="h1" sx={{
//                 fontWeight: 800,
//                 background: `linear-gradient(135deg, ${colors.primaryNeon} 0%, ${colors.secondaryNeon} 33%, ${colors.successNeon} 66%, ${colors.purple} 100%)`,
//                 backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent',
//                 letterSpacing: { xs: '-1px', md: '-2px' },
//                 fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
//               }}>
//                 ✨ Hostel Expense Tracker ✨
//               </Typography>
//               <Typography variant="body1" sx={{ color: colors.textSecondary, maxWidth: 600, mx: 'auto', mt: 1, fontSize: { xs: '0.85rem', sm: '1rem' } }}>
//                 Split bills, track expenses, and settle up with your roommates seamlessly
//               </Typography>
//             </Box>
//           </Slide>

//           {/* Tab Bar (desktop / tablet) */}
//           {!isMobile && (
//             <Paper elevation={0} sx={{ mb: 4, ...glassCard, overflow: 'hidden' }}>
//               <Tabs
//                 value={activeTab}
//                 onChange={(_, v) => setActiveTab(v)}
//                 centered={!isTablet}
//                 variant={isTablet ? 'scrollable' : 'fullWidth'}
//                 scrollButtons="auto"
//                 sx={{ '& .MuiTabs-indicator': { background: `linear-gradient(90deg, ${colors.primaryNeon}, ${colors.secondaryNeon})`, height: 3 } }}
//               >
//                 {TABS.map((tab, idx) => (
//                   <Tab
//                     key={idx}
//                     icon={tab.icon}
//                     iconPosition="start"
//                     label={tab.label}
//                     sx={{ color: colors.textPrimary, '&.Mui-selected': { color: colors.primaryNeon }, minHeight: 56 }}
//                   />
//                 ))}
//               </Tabs>
//             </Paper>
//           )}

//           {/* Mobile bottom tab bar */}
//           {isMobile && (
//             <Paper elevation={4} sx={{
//               position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1200,
//               background: colors.backgroundLight,
//               borderTop: `1px solid ${colors.glassBorder}`,
//             }}>
//               <Tabs
//                 value={activeTab}
//                 onChange={(_, v) => setActiveTab(v)}
//                 variant="fullWidth"
//                 sx={{ '& .MuiTabs-indicator': { background: colors.primaryNeon, height: 2 } }}
//               >
//                 {TABS.map((tab, idx) => (
//                   <Tab
//                     key={idx}
//                     icon={tab.icon}
//                     label={<Typography sx={{ fontSize: '0.6rem', color: activeTab === idx ? colors.primaryNeon : colors.textSecondary }}>{tab.label}</Typography>}
//                     sx={{ color: activeTab === idx ? colors.primaryNeon : colors.textSecondary, minHeight: 56, py: 0.5 }}
//                   />
//                 ))}
//               </Tabs>
//             </Paper>
//           )}

//           {/* ─── EXPENSES TAB ─────────────────────────────────────────────── */}
//           {activeTab === 0 && (
//             <Fade in timeout={400}>
//               <Box sx={{ pb: isMobile ? 8 : 0 }}>

//                 {/* Roommates Card */}
//                 <Zoom in timeout={300}>
//                   <Card sx={{ mb: 3, ...glassCard, ...hoverLift }}>
//                     <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
//                       <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
//                         <StarsIcon sx={{ color: colors.primaryNeon }} /> Roommates
//                       </Typography>
//                       <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2.5 }}>
//                         {members.map((m, idx) => (
//                           <Grow in timeout={idx * 80} key={m.MemberId}>
//                             <Chip
//                               avatar={<Avatar sx={{ background: getAvatarGradient(m.Name), fontWeight: 700, color: '#fff !important' }}>{m.Name[0]}</Avatar>}
//                               label={m.Name}
//                               onDelete={() => handleDeleteMember(m.MemberId, m.Name)}
//                               sx={{ fontWeight: 600, color: colors.textPrimary, background: alpha(colors.glassBg, 0.5), border: `1px solid ${colors.glassBorder}`, '&:hover': { background: alpha(colors.primaryNeon, 0.2) } }}
//                             />
//                           </Grow>
//                         ))}
//                       </Box>
//                       <Divider sx={{ borderColor: colors.glassBorder, my: 2 }} />
//                       <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
//                         <TextField
//                           size="small"
//                           label="Enter name..."
//                           value={newMember}
//                           onChange={(e) => setNewMember(e.target.value)}
//                           onKeyPress={(e) => e.key === 'Enter' && handleAddMember()}
//                           sx={{ ...inputSx, flex: 1 }}
//                         />
//                         <Button
//                           variant="contained"
//                           startIcon={<GroupAddIcon />}
//                           onClick={handleAddMember}
//                           fullWidth={isMobile}
//                           sx={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryNeon})`, borderRadius: 3, px: 3, whiteSpace: 'nowrap' }}
//                         >
//                           Add Member
//                         </Button>
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Zoom>

//                 {/* Add Expense Card */}
//                 <Zoom in timeout={400}>
//                   <Card sx={{ mb: 3, ...glassCard, ...hoverLift }}>
//                     <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
//                       <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
//                         <StarsIcon sx={{ color: colors.successNeon }} /> Log Shared Bill
//                       </Typography>

//                       <Grid container spacing={2}>
//                         {/* Row 1: Description + Amount */}
//                         <Grid item xs={12} sm={6}>
//                           <TextField fullWidth label="Description" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="e.g., Dinner, Groceries..." sx={inputSx} />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                           <TextField fullWidth label="Amount (₹)" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} sx={inputSx} />
//                         </Grid>

//                         {/* Row 2: Paid By + Category */}
//                         <Grid item xs={12} sm={6}>
//                           <FormControl fullWidth sx={inputSx}>
//                             <InputLabel>Paid By</InputLabel>
//                             <Select label="Paid By" value={payer} onChange={(e) => setPayer(e.target.value)}>
//                               {members.map((m) => <MenuItem key={m.MemberId} value={m.MemberId}>{m.Name}</MenuItem>)}
//                             </Select>
//                           </FormControl>
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                           <FormControl fullWidth sx={inputSx}>
//                             <InputLabel>Category</InputLabel>
//                             <Select label="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
//                               <MenuItem value="food">Food & Dining 🍔</MenuItem>
//                               <MenuItem value="grocery">Grocery 🥕</MenuItem>
//                               <MenuItem value="transport">Transport 🚌</MenuItem>
//                               <MenuItem value="accommodation">Accommodation 🏠</MenuItem>
//                               <MenuItem value="entertainment">Entertainment 🎬</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>

//                         {/* Row 3: Date */}
//                         <Grid item xs={12} sm={6}>
//                           <DatePicker
//                             label="Expense Date"
//                             value={expenseDate}
//                             onChange={setExpenseDate}
//                             sx={{ ...inputSx, '& .MuiSvgIcon-root': { color: colors.textSecondary } }}
//                             slotProps={{ textField: { fullWidth: true, sx: inputSx } }}
//                           />
//                         </Grid>

//                         {/* Split */}
//                         <Grid item xs={12}>
//                           <Typography variant="subtitle2" sx={{ color: colors.textSecondary, mb: 1, fontWeight: 600 }}>Split Between:</Typography>
//                           <FormGroup row sx={{ gap: { xs: 0.5, sm: 1.5 } }}>
//                             {members.map((m) => (
//                               <FormControlLabel
//                                 key={m.MemberId}
//                                 control={
//                                   <Checkbox
//                                     checked={!!selectedSplits[m.MemberId]}
//                                     onChange={() => setSelectedSplits((p) => ({ ...p, [m.MemberId]: !p[m.MemberId] }))}
//                                     sx={{ color: colors.primaryNeon, '&.Mui-checked': { color: colors.primaryNeon } }}
//                                   />
//                                 }
//                                 label={<Typography sx={{ color: colors.textPrimary, fontSize: { xs: '0.85rem', sm: '1rem' } }}>{m.Name}</Typography>}
//                               />
//                             ))}
//                           </FormGroup>
//                           <Typography variant="caption" sx={{ color: colors.warning, mt: 0.5, display: 'block' }}>
//                             ⚠️ Select ONLY people who need to pay back (Payer is excluded from split)
//                           </Typography>
//                         </Grid>
//                       </Grid>

//                       <Button
//                         variant="contained"
//                         startIcon={<ReceiptIcon />}
//                         onClick={handleAddExpense}
//                         fullWidth={isMobile}
//                         sx={{ mt: 3, background: `linear-gradient(135deg, ${colors.success}, ${colors.successNeon})`, borderRadius: 3, px: 5, py: 1.2, fontWeight: 700 }}
//                       >
//                         Add Expense
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </Zoom>

//                 {/* Stats Cards */}
//                 <Grid container spacing={2} sx={{ mb: 3, justifyContent: 'center' }}>
//                   {[
//                     { icon: <AttachMoneyIcon sx={{ fontSize: { xs: 36, sm: 50 }, color: colors.primaryNeon }} />, value: `₹${totalSpent.toFixed(2)}`, label: 'TOTAL SPENT', gradient: `linear-gradient(135deg, ${alpha(colors.primary, 0.2)}, ${alpha(colors.primaryNeon, 0.1)})`, border: alpha(colors.primaryNeon, 0.3), color: colors.primaryNeon },
//                     { icon: <ReceiptIcon sx={{ fontSize: { xs: 36, sm: 50 }, color: colors.secondaryNeon }} />, value: expenses.length, label: 'EXPENSES LOGGED', gradient: `linear-gradient(135deg, ${alpha(colors.secondary, 0.2)}, ${alpha(colors.secondaryNeon, 0.1)})`, border: alpha(colors.secondaryNeon, 0.3), color: colors.secondaryNeon },
//                     { icon: <PeopleIcon sx={{ fontSize: { xs: 36, sm: 50 }, color: colors.successNeon }} />, value: members.length, label: 'TOTAL MEMBERS', gradient: `linear-gradient(135deg, ${alpha(colors.success, 0.2)}, ${alpha(colors.successNeon, 0.1)})`, border: alpha(colors.successNeon, 0.3), color: colors.successNeon },
//                   ].map((stat, i) => (
//                     <Grid item xs={12} sm={4} key={i}>
//                       <Paper sx={{ p: { xs: 2, sm: 3 }, textAlign: 'center', borderRadius: 4, background: stat.gradient, border: `1px solid ${stat.border}`, backdropFilter: 'blur(10px)', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
//                         {stat.icon}
//                         <Typography variant="h3" sx={{ fontWeight: 800, color: stat.color, fontSize: { xs: '1.8rem', sm: '2.5rem' } }}>{stat.value}</Typography>
//                         <Typography variant="caption" sx={{ color: colors.textSecondary, fontWeight: 600, letterSpacing: 1, fontSize: { xs: '0.65rem', sm: '0.75rem' } }}>{stat.label}</Typography>
//                       </Paper>
//                     </Grid>
//                   ))}
//                 </Grid>

//                 {/* Expenses Table */}
//                 <Paper sx={{ borderRadius: 4, overflow: 'auto', ...glassCard, '& .MuiTableCell-root': { borderColor: colors.glassBorder, color: colors.textPrimary } }}>
//                   <Table sx={{ minWidth: isMobile ? 600 : 1100 }}>
//                     <TableHead sx={{ background: alpha(colors.primaryNeon, 0.1) }}>
//                       <TableRow>
//                         {['Date', 'Description', 'Amount', 'Paid By', 'Category', 'Split With', "Each Member's Share (₹)", 'Actions'].map((h) => (
//                           <TableCell key={h} sx={{ fontWeight: 700, color: colors.textPrimary, whiteSpace: 'nowrap', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{h}</TableCell>
//                         ))}
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {expenses.map((e) => {
//                         const isEditing = editingExpenseId === e.ExpenseId;
//                         const shares = calculateMemberShares(e);
//                         return (
//                           <TableRow key={e.ExpenseId} sx={{ '&:hover': { background: alpha(colors.glassBg, 0.3) } }}>
//                             {isEditing ? (
//                               <>
//                                 <TableCell>
//                                   <DatePicker value={editExpenseDate} onChange={setEditExpenseDate} slotProps={{ textField: { size: 'small', sx: { width: 130, '& .MuiInputBase-input': { color: 'white' } } } }} />
//                                 </TableCell>
//                                 <TableCell><TextField size="small" value={editDesc} onChange={(x) => setEditDesc(x.target.value)} sx={{ minWidth: 120 }} /></TableCell>
//                                 <TableCell><TextField size="small" type="number" value={editAmount} onChange={(x) => setEditAmount(x.target.value)} sx={{ width: 90 }} /></TableCell>
//                                 <TableCell>
//                                   <Select size="small" value={editPayerId} onChange={(x) => setEditPayerId(x.target.value)} sx={{ minWidth: 100 }}>
//                                     {members.map((m) => <MenuItem key={m.MemberId} value={m.MemberId}>{m.Name}</MenuItem>)}
//                                   </Select>
//                                 </TableCell>
//                                 <TableCell>
//                                   <Select size="small" value={editCategory} onChange={(x) => setEditCategory(x.target.value)}>
//                                     {Object.keys(categoryDisplay).map((k) => <MenuItem key={k} value={k}>{k}</MenuItem>)}
//                                   </Select>
//                                 </TableCell>
//                                 <TableCell>
//                                   <Stack direction="row" flexWrap="wrap">
//                                     {members.map((m) => (
//                                       <FormControlLabel key={m.MemberId} control={<Checkbox size="small" checked={!!editSelectedSplits[m.MemberId]} onChange={() => setEditSelectedSplits((p) => ({ ...p, [m.MemberId]: !p[m.MemberId] }))} />} label={<Typography sx={{ fontSize: '0.75rem' }}>{m.Name}</Typography>} />
//                                     ))}
//                                   </Stack>
//                                 </TableCell>
//                                 <TableCell><Typography variant="caption" color="text.secondary">Will update on save</Typography></TableCell>
//                                 <TableCell align="center">
//                                   <Tooltip title="Save"><IconButton color="success" onClick={() => handleSaveEditExpense(e.ExpenseId)}><SaveIcon /></IconButton></Tooltip>
//                                   <Tooltip title="Cancel"><IconButton color="error" onClick={() => setEditingExpenseId(null)}><CancelIcon /></IconButton></Tooltip>
//                                 </TableCell>
//                               </>
//                             ) : (
//                               <>
//                                 <TableCell>
//                                   <Chip icon={<CalendarTodayIcon sx={{ fontSize: 13 }} />} label={formatDate(e.Date)} size="small" variant="outlined" sx={{ borderColor: colors.glassBorder, color: colors.textPrimary, fontSize: '0.7rem' }} />
//                                 </TableCell>
//                                 <TableCell sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{e.Description}</TableCell>
//                                 <TableCell sx={{ fontWeight: 700, color: colors.successNeon }}>₹{e.Amount.toFixed(2)}</TableCell>
//                                 <TableCell><Chip label={e.Payer} size="small" sx={{ background: getMemberColor(e.Payer), color: 'white', fontWeight: 600 }} /></TableCell>
//                                 <TableCell><Chip icon={getCategoryIcon(e.Category)} label={categoryDisplay[e.Category] || e.Category} size="small" sx={{ background: getCategoryGradient(e.Category), color: 'white', fontWeight: 600, fontSize: '0.7rem' }} /></TableCell>
//                                 <TableCell>
//                                   <Stack direction="row" spacing={0.5} flexWrap="wrap">
//                                     {(e.SplitWith || []).map((name) => <Chip key={name} label={name} size="small" sx={{ background: getMemberColor(name), color: 'white', fontSize: '0.7rem' }} />)}
//                                   </Stack>
//                                 </TableCell>
//                                 <TableCell sx={{ minWidth: 200 }}>
//                                   <Stack spacing={0.5}>
//                                     {Object.entries(shares).map(([member, sd]) => (
//                                       <Tooltip key={member} title={sd.message} arrow placement="left">
//                                         <Chip
//                                           size="small"
//                                           avatar={<Avatar sx={{ bgcolor: getMemberColor(member), width: 22, height: 22, fontSize: '0.65rem' }}>{member[0]}</Avatar>}
//                                           label={sd.role === 'paid' ? `${member}: ₹${sd.amount.toFixed(2)} ✓` : `${member}: ₹${sd.amount.toFixed(2)} → ${sd.owesTo}`}
//                                           sx={{ background: sd.role === 'paid' ? alpha(colors.successNeon, 0.2) : alpha(colors.warning, 0.2), color: sd.role === 'paid' ? colors.successNeon : colors.warning, justifyContent: 'flex-start', '& .MuiChip-label': { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '0.7rem' } }}
//                                         />
//                                       </Tooltip>
//                                     ))}
//                                   </Stack>
//                                 </TableCell>
//                                 <TableCell align="center">
//                                   <Tooltip title="Edit"><IconButton sx={{ color: colors.primaryNeon }} onClick={() => startEditExpense(e)}><EditIcon /></IconButton></Tooltip>
//                                   <Tooltip title="Delete"><IconButton sx={{ color: colors.error }} onClick={() => handleDeleteExpense(e.ExpenseId)}><DeleteIcon /></IconButton></Tooltip>
//                                 </TableCell>
//                               </>
//                             )}
//                           </TableRow>
//                         );
//                       })}
//                       {expenses.length === 0 && (
//                         <TableRow>
//                           <TableCell colSpan={8} align="center" sx={{ py: 8 }}>
//                             <EmojiEmotionsIcon sx={{ fontSize: 60, color: colors.textSecondary, mb: 2, opacity: 0.5 }} />
//                             <Typography variant="h6" color={colors.textSecondary}>No expenses yet. Add your first expense!</Typography>
//                           </TableCell>
//                         </TableRow>
//                       )}
//                     </TableBody>
//                   </Table>
//                 </Paper>
//               </Box>
//             </Fade>
//           )}

//           {/* ─── ANALYTICS TAB ───────────────────────────────────────────── */}
//           {activeTab === 1 && (
//             <Fade in timeout={400}>
//               <Box sx={{ pb: isMobile ? 8 : 0 }}>

//                 {/* Filters */}
//                 <Zoom in timeout={300}>
//                   <Card sx={{ mb: 3, ...glassCard }}>
//                     <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
//                       <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
//                         <SearchIcon sx={{ color: colors.primaryNeon }} /> Filter Expenses
//                       </Typography>
//                       <Grid container spacing={2}>
//                         <Grid item xs={12} sm={6} md={4}>
//                           <DatePicker label="Start Date" value={startDate} onChange={setStartDate} slotProps={{ textField: { fullWidth: true, sx: inputSx } }} />
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={4}>
//                           <DatePicker label="End Date" value={endDate} onChange={setEndDate} slotProps={{ textField: { fullWidth: true, sx: inputSx } }} />
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={4}>
//                           <FormControl fullWidth sx={inputSx}>
//                             <InputLabel>Category</InputLabel>
//                             <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} label="Category">
//                               <MenuItem value="all">All Categories</MenuItem>
//                               {Object.entries(categoryDisplay).map(([k, v]) => <MenuItem key={k} value={k}>{v}</MenuItem>)}
//                             </Select>
//                           </FormControl>
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                           <Button fullWidth variant="outlined" startIcon={<ClearIcon />} onClick={() => { setStartDate(dayjs().startOf('month')); setEndDate(dayjs()); setSelectedCategory('all'); }} sx={{ height: 56, borderColor: colors.primaryNeon, color: colors.primaryNeon, borderRadius: 2 }}>
//                             Clear Filters
//                           </Button>
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                           <Button fullWidth variant="contained" startIcon={<FileDownloadIcon />} onClick={exportToCSV} sx={{ height: 56, background: `linear-gradient(135deg, ${colors.success}, ${colors.successNeon})`, borderRadius: 2 }}>
//                             Export CSV
//                           </Button>
//                         </Grid>
//                       </Grid>
//                     </CardContent>
//                   </Card>
//                 </Zoom>

//                 {/* Summary Stats */}
//                 <Grid container spacing={2} sx={{ mb: 3 }}>
//                   {[
//                     { label: 'Total (Filtered)', value: `₹${totalFilteredAmount.toFixed(2)}`, color: colors.successNeon },
//                     { label: 'Transactions', value: filteredExpenses.length, color: colors.primaryNeon },
//                     { label: 'Categories', value: Object.keys(categorySummary).length, color: colors.warning },
//                     { label: 'Date Range', value: `${startDate.format('DD MMM')} – ${endDate.format('DD MMM')}`, color: colors.textPrimary, small: true },
//                   ].map((s, i) => (
//                     <Grid item xs={6} sm={3} key={i}>
//                       <Paper sx={{ p: { xs: 1.5, sm: 2.5 }, textAlign: 'center', borderRadius: 3, background: alpha(colors.glassBg, 0.5), border: `1px solid ${colors.glassBorder}` }}>
//                         <Typography variant="caption" sx={{ color: colors.textSecondary, display: 'block' }}>{s.label}</Typography>
//                         <Typography variant={s.small ? 'body2' : 'h5'} sx={{ color: s.color, fontWeight: 700, mt: 0.5, fontSize: s.small ? { xs: '0.75rem', sm: '0.9rem' } : { xs: '1.2rem', sm: '1.5rem' } }}>{s.value}</Typography>
//                       </Paper>
//                     </Grid>
//                   ))}
//                 </Grid>

//                 {/* Category Summary */}
//                 <Card sx={{ mb: 3, borderRadius: 4, background: '#ffffff15', backdropFilter: 'blur(10px)', border: `1px solid ${colors.glassBorder}` }}>
//                   <CardContent sx={{ p: { xs: 1.5, sm: 3 } }}>
//                     <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.textPrimary }}>📊 Category-wise Summary</Typography>
//                     <Box sx={{ overflowX: 'auto' }}>
//                       <Table size={isMobile ? 'small' : 'medium'}>
//                         <TableHead>
//                           <TableRow>
//                             {['Category', 'Count', 'Total (₹)', 'Average'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, whiteSpace: 'nowrap', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{h}</TableCell>)}
//                           </TableRow>
//                         </TableHead>
//                         <TableBody>
//                           {Object.entries(categorySummary).map(([cat, data]) => (
//                             <TableRow key={cat}>
//                               <TableCell><Chip icon={getCategoryIcon(cat)} label={isMobile ? cat : (categoryDisplay[cat] || cat)} size="small" sx={{ background: getCategoryGradient(cat), color: 'white', fontSize: '0.7rem' }} /></TableCell>
//                               <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{data.count}</TableCell>
//                               <TableCell sx={{ color: colors.successNeon, fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>₹{data.total.toFixed(2)}</TableCell>
//                               <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>₹{(data.total / data.count).toFixed(2)}</TableCell>
//                             </TableRow>
//                           ))}
//                         </TableBody>
//                       </Table>
//                     </Box>
//                   </CardContent>
//                 </Card>

//                 {/* Member Summary */}
//                 <Card sx={{ mb: 3, borderRadius: 4, background: '#ffffff15', backdropFilter: 'blur(10px)', border: `1px solid ${colors.glassBorder}` }}>
//                   <CardContent sx={{ p: { xs: 1.5, sm: 3 } }}>
//                     <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.textPrimary }}>👥 Member Summary</Typography>
//                     <Box sx={{ overflowX: 'auto' }}>
//                       <Table size={isMobile ? 'small' : 'medium'}>
//                         <TableHead>
//                           <TableRow>
//                             {['Member', 'Payments', 'Total Paid', 'Avg', 'Action'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{h}</TableCell>)}
//                           </TableRow>
//                         </TableHead>
//                         <TableBody>
//                           {members.map((member) => {
//                             const s = memberSummary[member.Name] || { total: 0, count: 0 };
//                             return (
//                               <TableRow key={member.MemberId}>
//                                 <TableCell>
//                                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                                     <Avatar sx={{ background: getMemberColor(member.Name), width: 28, height: 28, fontSize: '0.8rem' }}>{member.Name[0]}</Avatar>
//                                     <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{member.Name}</Typography>
//                                   </Box>
//                                 </TableCell>
//                                 <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{s.count}</TableCell>
//                                 <TableCell sx={{ color: colors.successNeon, fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>₹{s.total.toFixed(2)}</TableCell>
//                                 <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>₹{s.count > 0 ? (s.total / s.count).toFixed(2) : '0'}</TableCell>
//                                 <TableCell>
//                                   <Button size="small" variant="outlined" startIcon={isMobile ? null : <PersonIcon />} onClick={() => setSelectedDetailMember(selectedDetailMember === member.Name ? 'all' : member.Name)} sx={{ borderColor: colors.primaryNeon, color: colors.primaryNeon, fontSize: { xs: '0.65rem', sm: '0.75rem' }, minWidth: 0, px: { xs: 1, sm: 2 } }}>
//                                     {selectedDetailMember === member.Name ? 'Hide' : 'Details'}
//                                   </Button>
//                                 </TableCell>
//                               </TableRow>
//                             );
//                           })}
//                         </TableBody>
//                       </Table>
//                     </Box>
//                   </CardContent>
//                 </Card>

//                 {/* Member Detail */}
//                 {selectedDetailMember !== 'all' && (() => {
//                   const { totalPaid, totalOwed, totalShouldPay, netBalance, details } = getMemberTotals(selectedDetailMember);
//                   return (
//                     <Zoom in>
//                       <Card sx={{ mb: 3, borderRadius: 4, background: `linear-gradient(135deg, ${alpha(colors.primaryNeon, 0.1)}, ${alpha(colors.secondaryNeon, 0.1)})`, border: `2px solid ${colors.primaryNeon}` }}>
//                         <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
//                           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                               <Avatar sx={{ background: getMemberColor(selectedDetailMember), width: { xs: 45, sm: 60 }, height: { xs: 45, sm: 60 }, fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 'bold' }}>{selectedDetailMember[0]}</Avatar>
//                               <Box>
//                                 <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, fontSize: { xs: '1rem', sm: '1.25rem' } }}>{selectedDetailMember}'s Details</Typography>
//                                 <Typography variant="caption" color="text.secondary">All expenses involving {selectedDetailMember}</Typography>
//                               </Box>
//                             </Box>
//                             <Button variant="contained" startIcon={<ClearIcon />} onClick={() => setSelectedDetailMember('all')} sx={{ background: colors.error }}>Close</Button>
//                           </Box>

//                           <Grid container spacing={2} sx={{ mb: 3 }}>
//                             {[
//                               { label: 'Total Paid', value: totalPaid, color: colors.successNeon },
//                               { label: 'Total Owed', value: totalOwed, color: colors.warning },
//                               { label: 'Should Pay', value: totalShouldPay, color: colors.info },
//                               { label: 'Net Balance', value: netBalance, color: netBalance >= 0 ? colors.successNeon : colors.error, prefix: netBalance >= 0 ? '+' : '' },
//                             ].map((s, i) => (
//                               <Grid item xs={6} sm={3} key={i}>
//                                 <Paper sx={{ p: { xs: 1.5, sm: 2 }, textAlign: 'center', background: alpha(s.color, 0.1) }}>
//                                   <Typography variant="caption" color="gray" sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem' } }}>{s.label}</Typography>
//                                   <Typography variant="h6" sx={{ color: s.color, fontWeight: 700, fontSize: { xs: '1rem', sm: '1.25rem' } }}>{s.prefix || ''}₹{Math.abs(s.value).toFixed(2)}</Typography>
//                                 </Paper>
//                               </Grid>
//                             ))}
//                           </Grid>

//                           <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.textPrimary }}>📋 Expense Breakdown</Typography>
//                           <Box sx={{ overflowX: 'auto' }}>
//                             <Table size={isMobile ? 'small' : 'medium'}>
//                               <TableHead>
//                                 <TableRow sx={{ background: alpha(colors.primaryNeon, 0.2) }}>
//                                   {['Date', 'Description', 'Total', 'Paid By', 'Share', 'Role', 'Split With'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, whiteSpace: 'nowrap', fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>{h}</TableCell>)}
//                                 </TableRow>
//                               </TableHead>
//                               <TableBody>
//                                 {details.map((d, idx) => (
//                                   <TableRow key={idx}>
//                                     <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>{formatDate(d.date)}</TableCell>
//                                     <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>{d.description}</TableCell>
//                                     <TableCell sx={{ color: colors.primaryNeon, fontWeight: 600, fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>₹{d.totalAmount.toFixed(2)}</TableCell>
//                                     <TableCell><Chip label={d.paidBy} size="small" sx={{ background: getMemberColor(d.paidBy), color: 'white', fontSize: '0.65rem' }} /></TableCell>
//                                     <TableCell sx={{ color: d.role === 'paid' ? colors.successNeon : colors.warning, fontWeight: 600, fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>₹{d.memberShare.toFixed(2)}</TableCell>
//                                     <TableCell><Chip label={d.role === 'paid' ? 'Paid' : 'Owes'} size="small" sx={{ background: d.role === 'paid' ? colors.successNeon : colors.warning, color: 'white', fontSize: '0.65rem' }} /></TableCell>
//                                     <TableCell><Stack direction="row" spacing={0.5} flexWrap="wrap">{d.splitWith.map((n) => <Chip key={n} label={n} size="small" sx={{ background: getMemberColor(n), color: 'white', fontSize: '0.65rem' }} />)}</Stack></TableCell>
//                                   </TableRow>
//                                 ))}
//                                 {details.length === 0 && <TableRow><TableCell colSpan={7} align="center"><Typography color="text.secondary">No expenses found</Typography></TableCell></TableRow>}
//                               </TableBody>
//                             </Table>
//                           </Box>
//                         </CardContent>
//                       </Card>
//                     </Zoom>
//                   );
//                 })()}

//                 {/* Grouped Expenses */}
//                 <Card sx={{ borderRadius: 4, ...glassCard }}>
//                   <CardContent sx={{ p: { xs: 1.5, sm: 3 } }}>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, gap: 2, flexWrap: 'wrap' }}>
//                       <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, fontSize: { xs: '0.95rem', sm: '1.1rem' } }}>
//                         📅 {viewType === 'daily' ? 'Daily' : viewType === 'weekly' ? 'Weekly' : 'Monthly'} Breakdown
//                       </Typography>
//                       <FormControl size="small" sx={{ minWidth: 110, ...inputSx }}>
//                         <Select value={viewType} onChange={(e) => setViewType(e.target.value)}>
//                           <MenuItem value="daily">Daily</MenuItem>
//                           <MenuItem value="weekly">Weekly</MenuItem>
//                           <MenuItem value="monthly">Monthly</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Box>
//                     {groupedExpenses.map((group, idx) => (
//                       <Paper key={idx} sx={{ mb: 2, p: { xs: 1.5, sm: 2 }, background: alpha(colors.glassBg, 0.3), borderRadius: 3 }}>
//                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
//                           <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.primaryNeon }}>
//                             {viewType === 'daily' ? group.date.format('DD MMMM YYYY') : viewType === 'weekly' ? `Week ${group.key.split('-W')[1]} – ${group.date.format('MMM YYYY')}` : group.date.format('MMMM YYYY')}
//                           </Typography>
//                           <Chip label={`₹${group.total.toFixed(2)}`} size="small" sx={{ bgcolor: alpha(colors.successNeon, 0.2), color: colors.successNeon, fontWeight: 600 }} />
//                         </Box>
//                         <Box sx={{ overflowX: 'auto' }}>
//                           <Table size="small">
//                             <TableHead>
//                               <TableRow>
//                                 {['Date', 'Description', 'Amount', 'Paid By', 'Category'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{h}</TableCell>)}
//                               </TableRow>
//                             </TableHead>
//                             <TableBody>
//                               {group.items.map((exp, i) => (
//                                 <TableRow key={i}>
//                                   <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{formatDate(exp.Date)}</TableCell>
//                                   <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{exp.Description}</TableCell>
//                                   <TableCell sx={{ color: colors.successNeon, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>₹{exp.Amount.toFixed(2)}</TableCell>
//                                   <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{exp.Payer}</TableCell>
//                                   <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{exp.Category}</TableCell>
//                                 </TableRow>
//                               ))}
//                             </TableBody>
//                           </Table>
//                         </Box>
//                       </Paper>
//                     ))}
//                     {groupedExpenses.length === 0 && <Box sx={{ textAlign: 'center', py: 4 }}><Typography color="text.secondary">No expenses for selected filters.</Typography></Box>}
//                   </CardContent>
//                 </Card>
//               </Box>
//             </Fade>
//           )}

//           {/* ─── BALANCES TAB ────────────────────────────────────────────── */}
//           {activeTab === 2 && (
//             <Fade in timeout={400}>
//               <Box sx={{ pb: isMobile ? 8 : 0 }}>
//                 <Paper sx={{ borderRadius: 4, overflow: 'auto', ...glassCard, '& .MuiTableCell-root': { borderColor: colors.glassBorder, color: colors.textPrimary } }}>
//                   <Table size={isMobile ? 'small' : 'medium'}>
//                     <TableHead sx={{ background: alpha(colors.primaryNeon, 0.1) }}>
//                       <TableRow>
//                         {['Member', 'Total Paid (₹)', 'Total Share (₹)', 'Net Balance (₹)'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, whiteSpace: 'nowrap', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{h}</TableCell>)}
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {members.map((m) => {
//                         const bal = memberBalances[m.Name] || { paid: 0, share: 0, net: 0 };
//                         return (
//                           <TableRow key={m.MemberId}>
//                             <TableCell>
//                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
//                                 <Avatar sx={{ background: getAvatarGradient(m.Name), width: { xs: 34, sm: 45 }, height: { xs: 34, sm: 45 }, fontWeight: 700, color: 'white', fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>{m.Name[0]}</Avatar>
//                                 <Typography fontWeight={700} sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }}>{m.Name}</Typography>
//                               </Box>
//                             </TableCell>
//                             <TableCell sx={{ fontWeight: 600, color: colors.successNeon, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>₹{bal.paid.toFixed(2)}</TableCell>
//                             <TableCell sx={{ fontWeight: 600, color: colors.warning, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>₹{bal.share.toFixed(2)}</TableCell>
//                             <TableCell>
//                               <Chip
//                                 icon={bal.net >= 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
//                                 label={`${bal.net >= 0 ? '+' : ''}₹${bal.net.toFixed(2)}`}
//                                 size={isMobile ? 'small' : 'medium'}
//                                 sx={{ background: bal.net >= 0 ? `linear-gradient(135deg, ${colors.success}, ${colors.successNeon})` : `linear-gradient(135deg, ${colors.error}, ${colors.secondaryNeon})`, color: 'white', fontWeight: 700, '& .MuiChip-icon': { color: 'white' } }}
//                               />
//                             </TableCell>
//                           </TableRow>
//                         );
//                       })}
//                     </TableBody>
//                   </Table>
//                   <Box sx={{ p: 2, bgcolor: alpha(colors.warning, 0.1), m: 2, borderRadius: 2 }}>
//                     <Typography variant="caption" sx={{ color: colors.textSecondary }}>
//                       💡 <strong>Balances:</strong>{' '}
//                       <span style={{ color: colors.successNeon }}>+₹ = Owed money</span> &nbsp;|&nbsp;
//                       <span style={{ color: colors.error }}>-₹ = Owes money</span>
//                     </Typography>
//                   </Box>
//                 </Paper>
//               </Box>
//             </Fade>
//           )}

//           {/* ─── SETTLE UP TAB ───────────────────────────────────────────── */}
//           {activeTab === 3 && (
//             <Fade in timeout={400}>
//               <Box sx={{ pb: isMobile ? 8 : 0 }}>
//                 <Card sx={{ borderRadius: 4, ...glassCard }}>
//                   <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
//                     <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
//                       <StarsIcon sx={{ color: colors.successNeon }} /> Settlement Plan
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 3 }}>Direct payments to clear all debts</Typography>

//                     {settlements.length === 0 ? (
//                       <Box sx={{ textAlign: 'center', py: 6 }}>
//                         <CheckCircleIcon sx={{ fontSize: { xs: 60, sm: 80 }, color: colors.successNeon, mb: 2 }} />
//                         <Typography variant="h5" sx={{ color: colors.successNeon, fontWeight: 700, mb: 1, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>All settled up! 🎉</Typography>
//                         <Typography variant="body1" sx={{ color: colors.textSecondary }}>Everyone is balanced. Great job!</Typography>
//                       </Box>
//                     ) : (
//                       <Stack spacing={2}>
//                         {settlements.map((s, i) => (
//                           <Slide direction="left" in timeout={400 + i * 100} key={i}>
//                             <Paper sx={{ p: { xs: 2, sm: 2.5 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: 3, background: alpha(colors.glassBg, 0.5), border: `1px solid ${colors.glassBorder}`, flexWrap: 'wrap', gap: 1, '&:hover': { transform: 'translateX(6px)', transition: 'transform 0.3s' } }}>
//                               <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap' }}>
//                                 <Avatar sx={{ background: getMemberColor(s.from), width: { xs: 34, sm: 42 }, height: { xs: 34, sm: 42 }, fontWeight: 700 }}>{s.from[0]}</Avatar>
//                                 <Typography sx={{ color: colors.textPrimary, fontWeight: 600, fontSize: { xs: '0.85rem', sm: '1rem' } }}>pays</Typography>
//                                 <Typography sx={{ fontWeight: 800, background: `linear-gradient(135deg, ${colors.primaryNeon}, ${colors.successNeon})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>₹{s.amount.toFixed(2)}</Typography>
//                                 <Typography sx={{ color: colors.textPrimary, fontWeight: 600, fontSize: { xs: '0.85rem', sm: '1rem' } }}>to</Typography>
//                                 <Avatar sx={{ background: getMemberColor(s.to), width: { xs: 34, sm: 42 }, height: { xs: 34, sm: 42 }, fontWeight: 700 }}>{s.to[0]}</Avatar>
//                                 <Typography sx={{ color: colors.textPrimary, fontWeight: 600, fontSize: { xs: '0.85rem', sm: '1rem' } }}>{s.to}</Typography>
//                               </Box>
//                               <Chip label={`#${i + 1}`} size="small" sx={{ background: colors.primaryNeon, color: 'white', fontWeight: 700 }} />
//                             </Paper>
//                           </Slide>
//                         ))}
//                       </Stack>
//                     )}
//                   </CardContent>
//                 </Card>
//               </Box>
//             </Fade>
//           )}

//         </Container>

//         {/* Snackbar */}
//         <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar((s) => ({ ...s, open: false }))} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} sx={{ mb: isMobile ? 8 : 0 }}>
//           <Alert severity={snackbar.severity} sx={{ borderRadius: 3, boxShadow: 3, fontWeight: 500, background: colors.glassBg, backdropFilter: 'blur(10px)', color: colors.textPrimary }}>
//             {snackbar.message}
//           </Alert>
//         </Snackbar>

//         <style>{`
//           @keyframes float {
//             0%, 100% { transform: translate(0,0) rotate(0deg); }
//             50% { transform: translate(20px,-20px) rotate(180deg); }
//           }
//           .MuiPickersDay-root { color: white !important; }
//           .MuiPickersYear-yearButton { color: white !important; }
//           .MuiPickersMonth-monthButton { color: white !important; }
//           .MuiPickersPopper-paper { background-color: #1e293b !important; }
//           .MuiPickersDay-root.Mui-selected { background-color: #6366f1 !important; }
//           .MuiDialog-container .MuiPaper-root { background-color: #1e293b !important; }
//           .MuiPickersToolbar-root { background-color: #6366f1 !important; }
//         `}</style>
//       </Box>
//     </LocalizationProvider>
//   );
// }


import { useState, useEffect } from 'react';
import {
  Container, Tabs, Tab, Box, Typography, Card, CardContent, Grid,
  Button, TextField, Select, MenuItem, InputLabel, FormControl,
  FormGroup, FormControlLabel, Checkbox, Table, TableBody, TableCell,
  TableHead, TableRow, Paper, Chip, IconButton, Avatar, Divider,
  Fade, Zoom, Grow, Slide, alpha, Stack,
  Tooltip, Alert, Snackbar, CircularProgress, useMediaQuery, useTheme,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import TrainIcon from '@mui/icons-material/Train';
import WeekendIcon from '@mui/icons-material/Weekend';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import StarsIcon from '@mui/icons-material/Stars';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';

import axios from 'axios';

// ─── API Base URL ─────────────────────────────────────────────────────────
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// ─── Color Palette ───────────────────────────────────────────────────────────
const colors = {
  primary: '#6366f1',
  primaryNeon: '#a855f7',
  secondary: '#ec4899',
  secondaryNeon: '#f43f5e',
  success: '#10b981',
  successNeon: '#06b6d4',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  purple: '#8b5cf6',
  orange: '#f97316',
  teal: '#14b8a6',
  cyan: '#06b6d4',
  pink: '#d946ef',
  background: '#0f172a',
  backgroundLight: '#1e293b',
  cardBg: 'rgba(30, 41, 59, 0.8)',
  textPrimary: '#f1f5f9',
  textSecondary: '#94a3b8',
  glassBorder: 'rgba(255,255,255,0.1)',
  glassBg: 'rgba(83, 57, 57, 0.05)',
};

const memberColors = {
  0: '#64748b', 1: '#fda4af', 2: '#fbbf24', 3: '#024532', 4: '#737373',
  5: '#78716c', 6: '#0ea5e9', 7: '#8b5cf6', 8: '#84cc16', 9: '#c026d3',
  10: '#2563eb', 11: '#0f766e', 12: '#fb923c', 13: '#818cf8', 14: '#eab308',
};

const getMemberColor = (name) => {
  if (!name) return colors.primary;
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash + name.charCodeAt(i)) % Object.keys(memberColors).length;
  }
  return memberColors[hash];
};

const categoryDisplay = {
  food: 'Food & Dining 🍔',
  grocery: 'Groceries 🥕',
  transport: 'Transport 🚌',
  accommodation: 'Accommodation 🏠',
  entertainment: 'Entertainment 🎬',
};

// ─── Shared input sx ─────────────────────────────────────────────────────────
const inputSx = {
  width: '100%',
  background: '#ffffff1f',
  borderRadius: '10px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    color: colors.textPrimary,
    '& fieldset': { borderColor: colors.glassBorder },
    '&:hover fieldset': { borderColor: alpha(colors.primaryNeon, 0.5) },
    '&.Mui-focused fieldset': { borderColor: colors.primaryNeon },
  },
  '& .MuiInputLabel-root': { color: colors.textSecondary },
  '& .MuiInputBase-input': { color: `${colors.textPrimary} !important` },
  '& .MuiSelect-icon': { color: colors.textSecondary },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
const getAvatarGradient = (name) => {
  const c = getMemberColor(name);
  return `linear-gradient(135deg, ${c}, ${c}cc)`;
};

const getCategoryIcon = (cat) => {
  const s = { fontSize: 18, color: 'white !important' };
  switch (cat) {
    case 'food': return <FastfoodIcon sx={s} />;
    case 'grocery': return <ShoppingCartIcon sx={s} />;
    case 'transport': return <TrainIcon sx={s} />;
    case 'accommodation': return <HomeIcon sx={s} />;
    case 'entertainment': return <WeekendIcon sx={s} />;
    default: return <CategoryIcon sx={s} />;
  }
};

const getCategoryGradient = (cat) => {
  switch (cat) {
    case 'food': return `linear-gradient(135deg, ${colors.orange}, #ea580c)`;
    case 'grocery': return `linear-gradient(135deg, ${colors.teal}, #0d9488)`;
    case 'transport': return `linear-gradient(135deg, ${colors.info}, #2563eb)`;
    case 'accommodation': return `linear-gradient(135deg, ${colors.purple}, #7c3aed)`;
    case 'entertainment': return `linear-gradient(135deg, ${colors.pink}, #c026d3)`;
    default: return `linear-gradient(135deg, ${colors.primary}, ${colors.primaryNeon})`;
  }
};

const formatDate = (d) => {
  if (!d) return 'No date';
  const dt = dayjs(d);
  return dt.isValid() ? dt.format('DD MMM YYYY') : 'Invalid date';
};

// ─── Tab definitions ──────────────────────────────────────────────────────────
const TABS = [
  { label: 'Expenses', icon: <ReceiptIcon /> },
  { label: 'Analytics', icon: <AnalyticsIcon /> },
  { label: 'Balances', icon: <AccountBalanceWalletIcon /> },
  { label: 'Settle Up', icon: <TrendingUpIcon /> },
];

// ═══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [activeTab, setActiveTab] = useState(0);
  const [members, setMembers] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Analytics
  const [startDate, setStartDate] = useState(dayjs().startOf('month'));
  const [endDate, setEndDate] = useState(dayjs());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewType, setViewType] = useState('daily');
  const [selectedDetailMember, setSelectedDetailMember] = useState('all');

  // Add Expense
  const [newMember, setNewMember] = useState('');
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [payer, setPayer] = useState('');
  const [category, setCategory] = useState('food');
  const [expenseDate, setExpenseDate] = useState(dayjs());
  const [selectedSplits, setSelectedSplits] = useState({});

  // Edit Expense
  const [editingExpenseId, setEditingExpenseId] = useState(null);
  const [editDesc, setEditDesc] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [editPayerId, setEditPayerId] = useState('');
  const [editCategory, setEditCategory] = useState('food');
  const [editExpenseDate, setEditExpenseDate] = useState(dayjs());
  const [editSelectedSplits, setEditSelectedSplits] = useState({});

  const showNotification = (message, severity = 'success') =>
    setSnackbar({ open: true, message, severity });

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const memRes = await axios.get(`${API_BASE_URL}/api/members`);
        const expRes = await axios.get(`${API_BASE_URL}/api/expenses`);
        setMembers(memRes.data);
        setExpenses(expRes.data);
        const checks = {};
        memRes.data.forEach((m) => { checks[m.MemberId] = true; });
        setSelectedSplits(checks);
      } catch {
        showNotification('Failed to load data', 'error');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const refreshData = async () => {
    try {
      const memRes = await axios.get(`${API_BASE_URL}/api/members`);
      const expRes = await axios.get(`${API_BASE_URL}/api/expenses`);
      setMembers(memRes.data);
      setExpenses(expRes.data);
    } catch {
      showNotification('Failed to refresh data', 'error');
    }
  };

  // ─── Business logic (unchanged) ──────────────────────────────────────────
  const calculateMemberShares = (expense) => {
    const shares = {};
    const splitWith = expense.SplitWith || [];
    const pd = expense.Payer;
    const total = expense.Amount;
    const n = splitWith.length;
    if (n > 0) {
      const share = total / n;
      splitWith.forEach((person) => {
        if (person === pd) {
          shares[person] = { amount: share, role: 'paid', owesTo: null, message: `${person} paid ₹${total.toFixed(2)} — share ₹${share.toFixed(2)}` };
        } else {
          shares[person] = { amount: share, role: 'owes', owesTo: pd, message: `${person} owes ₹${share.toFixed(2)} to ${pd}` };
        }
      });
    }
    return shares;
  };

  const filteredExpenses = expenses.filter((exp) => {
    if (!exp.Date) return false;
    const d = dayjs(exp.Date);
    return (
      (!startDate || d.isAfter(startDate.subtract(1, 'day'))) &&
      (!endDate || d.isBefore(endDate.add(1, 'day'))) &&
      (selectedCategory === 'all' || exp.Category === selectedCategory)
    );
  });

  const getMemberExpenseDetails = (memberName) => {
    const details = [];
    expenses.forEach((expense) => {
      const splitWith = expense.SplitWith || [];
      const pd = expense.Payer;
      const amt = expense.Amount;
      const n = splitWith.length;
      if (splitWith.includes(memberName) || pd === memberName) {
        const share = n > 0 ? amt / n : 0;
        details.push({
          expenseId: expense.ExpenseId,
          date: expense.Date,
          description: expense.Description,
          totalAmount: amt,
          paidBy: pd,
          memberShare: share,
          role: pd === memberName ? 'paid' : 'owes',
          category: expense.Category,
          splitWith,
        });
      }
    });
    return details;
  };

  const getMemberTotals = (memberName) => {
    const details = getMemberExpenseDetails(memberName);
    let totalPaid = 0, totalOwed = 0, totalShouldPay = 0;
    details.forEach((d) => {
      if (d.role === 'paid') { totalPaid += d.totalAmount; totalShouldPay += d.memberShare; }
      else { totalOwed += d.memberShare; totalShouldPay += d.memberShare; }
    });
    return { totalPaid, totalOwed, totalShouldPay, netBalance: totalPaid - totalShouldPay, details };
  };

  const getGroupedExpenses = () => {
    const groups = {};
    filteredExpenses.forEach((exp) => {
      const date = dayjs(exp.Date);
      const key = viewType === 'daily' ? date.format('YYYY-MM-DD')
        : viewType === 'weekly' ? `${date.year()}-W${date.week()}`
        : date.format('YYYY-MM');
      if (!groups[key]) groups[key] = { total: 0, items: [], date };
      groups[key].total += exp.Amount;
      groups[key].items.push(exp);
    });
    return Object.entries(groups)
      .sort((a, b) => a[1].date.isBefore(b[1].date) ? -1 : 1)
      .map(([key, val]) => ({ key, ...val }));
  };

  const categorySummary = filteredExpenses.reduce((acc, exp) => {
    if (!acc[exp.Category]) acc[exp.Category] = { total: 0, count: 0 };
    acc[exp.Category].total += exp.Amount;
    acc[exp.Category].count += 1;
    return acc;
  }, {});

  const memberSummary = filteredExpenses.reduce((acc, exp) => {
    if (!acc[exp.Payer]) acc[exp.Payer] = { total: 0, count: 0 };
    acc[exp.Payer].total += exp.Amount;
    acc[exp.Payer].count += 1;
    return acc;
  }, {});

  const totalFilteredAmount = filteredExpenses.reduce((s, e) => s + e.Amount, 0);
  const totalSpent = expenses.reduce((s, e) => s + e.Amount, 0);

  const computeBalances = () => {
    const b = {};
    members.forEach((m) => { b[m.Name] = { paid: 0, share: 0, net: 0 }; });
    expenses.forEach((exp) => {
      const pd = exp.Payer;
      const splitWith = exp.SplitWith || [];
      const n = splitWith.length;
      if (b[pd]) b[pd].paid += exp.Amount;
      if (n > 0) {
        const share = exp.Amount / n;
        splitWith.forEach((p) => { if (b[p]) b[p].share += share; });
      }
    });
    Object.keys(b).forEach((n) => { b[n].net = b[n].paid - b[n].share; });
    return b;
  };

  const computeSettlements = () => {
    const txns = [];
    expenses.forEach((exp) => {
      const pd = exp.Payer;
      const splitWith = exp.SplitWith || [];
      const n = splitWith.length;
      if (n > 0) {
        const share = exp.Amount / n;
        splitWith.forEach((p) => { if (p !== pd) txns.push({ from: p, to: pd, amount: share }); });
      }
    });
    const map = new Map();
    txns.forEach((t) => {
      const key = `${t.from}|${t.to}`;
      map.set(key, (map.get(key) || 0) + t.amount);
    });
    let list = Array.from(map.entries()).map(([k, a]) => {
      const [from, to] = k.split('|');
      return { from, to, amount: Math.round(a * 100) / 100 };
    }).filter((t) => t.amount > 0.01);
    let changed = true;
    while (changed) {
      changed = false;
      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          if (list[i].from === list[j].to && list[i].to === list[j].from) {
            const a = list[i].amount, b = list[j].amount;
            if (a > b) { list[i].amount = a - b; list.splice(j, 1); }
            else if (b > a) { list[j].amount = b - a; list.splice(i, 1); }
            else { list.splice(i, 1); list.splice(j - 1, 1); }
            changed = true; break;
          }
        }
        if (changed) break;
      }
    }
    return list.filter((t) => t.amount > 0.01).sort((a, b) => b.amount - a.amount);
  };

  const memberBalances = computeBalances();
  const settlements = computeSettlements();
  const groupedExpenses = getGroupedExpenses();

  const exportToCSV = () => {
    const headers = ['Date', 'Description', 'Amount', 'Paid By', 'Category', 'Split With'];
    const rows = filteredExpenses.map((exp) => [exp.Date, exp.Description, exp.Amount, exp.Payer, exp.Category, (exp.SplitWith || []).join(', ')]);
    const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = `expenses_${dayjs().format('YYYY-MM-DD')}.csv`;
    a.click();
    showNotification('Exported successfully! 📊');
  };

  const handleAddMember = async () => {
    if (!newMember.trim()) return;
    try {
      await axios.post(`${API_BASE_URL}/api/members`, { name: newMember });
      setNewMember('');
      await refreshData();
      showNotification(`${newMember} joined the hostel! 🎉`);
    } catch { showNotification('Failed to add member', 'error'); }
  };

  const handleDeleteMember = async (id, name) => {
    if (!window.confirm(`Remove ${name} from the hostel?`)) return;
    try {
      await axios.delete(`${API_BASE_URL}/api/members/${id}`);
      await refreshData();
      showNotification(`${name} left the hostel 👋`, 'info');
    } catch { showNotification('Failed to delete member', 'error'); }
  };

  const handleAddExpense = async () => {
    const splitIds = Object.keys(selectedSplits).filter((id) => selectedSplits[id]).map(Number);
    if (!desc.trim() || !amount || !payer || splitIds.length === 0) {
      showNotification('Please fill all fields and select at least one person to split with', 'warning');
      return;
    }
    try {
      await axios.post(`${API_BASE_URL}/api/expenses`, {
        description: desc, amount: parseFloat(amount), payerId: parseInt(payer),
        category, splitMemberIds: splitIds, date: expenseDate.format('YYYY-MM-DD'),
      });
      setDesc(''); setAmount(''); setPayer(''); setExpenseDate(dayjs());
      await refreshData();
      showNotification('Expense added successfully! 💰');
    } catch { showNotification('Failed to add expense', 'error'); }
  };

  const startEditExpense = (expense) => {
    setEditingExpenseId(expense.ExpenseId);
    setEditDesc(expense.Description);
    setEditAmount(expense.Amount);
    setEditCategory(expense.Category);
    setEditExpenseDate(expense.Date ? dayjs(expense.Date) : dayjs());
    const matched = members.find((m) => m.Name === expense.Payer);
    setEditPayerId(matched ? matched.MemberId : '');
    const map = {};
    members.forEach((m) => { map[m.MemberId] = Array.isArray(expense.SplitWith) && expense.SplitWith.includes(m.Name); });
    setEditSelectedSplits(map);
  };

  const handleSaveEditExpense = async (expenseId) => {
    const splitIds = Object.keys(editSelectedSplits).filter((id) => editSelectedSplits[id]).map(Number);
    if (!editDesc.trim() || !editAmount || !editPayerId || splitIds.length === 0) {
      showNotification('Please fill all fields', 'warning'); return;
    }
    try {
      await axios.put(`${API_BASE_URL}/api/expenses/${expenseId}`, {
        description: editDesc, amount: parseFloat(editAmount), payerId: parseInt(editPayerId),
        category: editCategory, splitMemberIds: splitIds, date: editExpenseDate.format('YYYY-MM-DD'),
      });
      setEditingExpenseId(null);
      await refreshData();
      showNotification('Expense updated! ✏️');
    } catch { showNotification('Failed to update expense', 'error'); }
  };

  const handleDeleteExpense = async (id) => {
    if (!window.confirm('Permanently delete this bill?')) return;
    try {
      await axios.delete(`${API_BASE_URL}/api/expenses/${id}`);
      await refreshData();
      showNotification('Expense deleted 🗑️');
    } catch { showNotification('Failed to delete expense', 'error'); }
  };

  // ─── Shared card sx ────────────────────────────────────────────────────────
  const glassCard = {
    borderRadius: 4,
    background: colors.glassBg,
    backdropFilter: 'blur(10px)',
    border: `1px solid ${colors.glassBorder}`,
  };

  const hoverLift = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': { transform: 'translateY(-5px)', boxShadow: `0 20px 40px ${alpha(colors.primaryNeon, 0.2)}` },
  };

  // ─── Loading screen ────────────────────────────────────────────────────────
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: colors.background }}>
        <CircularProgress sx={{ color: colors.primaryNeon }} />
      </Box>
    );
  }



  // ════════════════════════════════════════════════════════════════════════════
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ minHeight: '100vh', background: `radial-gradient(circle at 0% 0%, ${colors.background} 0%, ${colors.backgroundLight} 100%)`, position: 'relative', overflow: 'hidden' }}>

        {/* Ambient blobs */}
        <Box sx={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <Box sx={{ position: 'absolute', top: '10%', left: '5%', width: 300, height: 300, background: `radial-gradient(circle, ${alpha(colors.primaryNeon, 0.1)} 0%, transparent 70%)`, borderRadius: '50%', animation: 'float 20s infinite' }} />
          <Box sx={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, background: `radial-gradient(circle, ${alpha(colors.secondaryNeon, 0.1)} 0%, transparent 70%)`, borderRadius: '50%', animation: 'float 25s infinite reverse' }} />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 2, sm: 4 }, px: { xs: 1.5, sm: 3 } }}>

          {/* Header */}
          <Slide direction="down" in timeout={400}>
            <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 5 } }}>
              <Typography variant="h1" sx={{
                fontWeight: 800,
                background: `linear-gradient(135deg, ${colors.primaryNeon} 0%, ${colors.secondaryNeon} 33%, ${colors.successNeon} 66%, ${colors.purple} 100%)`,
                backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent',
                letterSpacing: { xs: '-1px', md: '-2px' },
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
              }}>
                ✨ Hostel Expense Tracker ✨
              </Typography>
              <Typography variant="body1" sx={{ color: colors.textSecondary, maxWidth: 600, mx: 'auto', mt: 1, fontSize: { xs: '0.85rem', sm: '1rem' } }}>
                Split bills, track expenses, and settle up with your roommates seamlessly
              </Typography>
            </Box>
          </Slide>

          {/* Tab Bar (desktop / tablet) */}
          {!isMobile && (
            <Paper elevation={0} sx={{ mb: 4, ...glassCard, overflow: 'hidden' }}>
              <Tabs
                value={activeTab}
                onChange={(_, v) => setActiveTab(v)}
                centered={!isTablet}
                variant={isTablet ? 'scrollable' : 'fullWidth'}
                scrollButtons="auto"
                sx={{ '& .MuiTabs-indicator': { background: `linear-gradient(90deg, ${colors.primaryNeon}, ${colors.secondaryNeon})`, height: 3 } }}
              >
                {TABS.map((tab, idx) => (
                  <Tab
                    key={idx}
                    icon={tab.icon}
                    iconPosition="start"
                    label={tab.label}
                    sx={{ color: colors.textPrimary, '&.Mui-selected': { color: colors.primaryNeon }, minHeight: 56 }}
                  />
                ))}
              </Tabs>
            </Paper>
          )}

          {/* Mobile bottom tab bar */}
          {isMobile && (
            <Paper elevation={4} sx={{
              position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1200,
              background: colors.backgroundLight,
              borderTop: `1px solid ${colors.glassBorder}`,
            }}>
              <Tabs
                value={activeTab}
                onChange={(_, v) => setActiveTab(v)}
                variant="fullWidth"
                sx={{ '& .MuiTabs-indicator': { background: colors.primaryNeon, height: 2 } }}
              >
                {TABS.map((tab, idx) => (
                  <Tab
                    key={idx}
                    icon={tab.icon}
                    label={<Typography sx={{ fontSize: '0.6rem', color: activeTab === idx ? colors.primaryNeon : colors.textSecondary }}>{tab.label}</Typography>}
                    sx={{ color: activeTab === idx ? colors.primaryNeon : colors.textSecondary, minHeight: 56, py: 0.5 }}
                  />
                ))}
              </Tabs>
            </Paper>
          )}

          {/* ─── EXPENSES TAB ─────────────────────────────────────────────── */}
          {activeTab === 0 && (
            <Fade in timeout={400}>
              <Box sx={{ pb: isMobile ? 8 : 0 }}>

                {/* Roommates Card */}
                <Zoom in timeout={300}>
                  <Card sx={{ mb: 3, ...glassCard, ...hoverLift }}>
                    <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
                        <StarsIcon sx={{ color: colors.primaryNeon }} /> Roommates
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2.5 }}>
                        {members.map((m, idx) => (
                          <Grow in timeout={idx * 80} key={m.MemberId}>
                            <Chip
                              avatar={<Avatar sx={{ background: getAvatarGradient(m.Name), fontWeight: 700, color: '#fff !important' }}>{m.Name[0]}</Avatar>}
                              label={m.Name}
                              onDelete={() => handleDeleteMember(m.MemberId, m.Name)}
                              sx={{ fontWeight: 600, color: colors.textPrimary, background: alpha(colors.glassBg, 0.5), border: `1px solid ${colors.glassBorder}`, '&:hover': { background: alpha(colors.primaryNeon, 0.2) } }}
                            />
                          </Grow>
                        ))}
                      </Box>
                      <Divider sx={{ borderColor: colors.glassBorder, my: 2 }} />
                      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
                        <TextField
                          size="small"
                          label="Enter name..."
                          value={newMember}
                          onChange={(e) => setNewMember(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleAddMember()}
                          sx={{ ...inputSx, flex: 1 }}
                        />
                        <Button
                          variant="contained"
                          startIcon={<GroupAddIcon />}
                          onClick={handleAddMember}
                          fullWidth={isMobile}
                          sx={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryNeon})`, borderRadius: 3, px: 3, whiteSpace: 'nowrap' }}
                        >
                          Add Member
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Zoom>

                {/* Add Expense Card */}
                <Zoom in timeout={400}>
                  <Card sx={{ mb: 3, ...glassCard, ...hoverLift }}>
                    <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
                        <StarsIcon sx={{ color: colors.successNeon }} /> Log Shared Bill
                      </Typography>

                      <Grid container spacing={2}>
                        {/* Row 1: Description + Amount */}
                        <Grid item xs={12} sm={6}>
                          <TextField fullWidth label="Description" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="e.g., Dinner, Groceries..." sx={inputSx} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField fullWidth label="Amount (₹)" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} sx={inputSx} />
                        </Grid>

                        {/* Row 2: Paid By + Category */}
                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth sx={inputSx}>
                            <InputLabel>Paid By</InputLabel>
                            <Select label="Paid By" value={payer} onChange={(e) => setPayer(e.target.value)}>
                              {members.map((m) => <MenuItem key={m.MemberId} value={m.MemberId}>{m.Name}</MenuItem>)}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth sx={inputSx}>
                            <InputLabel>Category</InputLabel>
                            <Select label="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
                              <MenuItem value="food">Food & Dining 🍔</MenuItem>
                              <MenuItem value="grocery">Grocery 🥕</MenuItem>
                              <MenuItem value="transport">Transport 🚌</MenuItem>
                              <MenuItem value="accommodation">Accommodation 🏠</MenuItem>
                              <MenuItem value="entertainment">Entertainment 🎬</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        {/* Row 3: Date */}
                        <Grid item xs={12} sm={6}>
                          <DatePicker
                            label="Expense Date"
                            value={expenseDate}
                            onChange={setExpenseDate}
                            sx={{ ...inputSx, '& .MuiSvgIcon-root': { color: colors.textSecondary } }}
                            slotProps={{ textField: { fullWidth: true, sx: inputSx } }}
                          />
                        </Grid>

                        {/* Split */}
                        <Grid item xs={12}>
                          <Typography variant="subtitle2" sx={{ color: colors.textSecondary, mb: 1, fontWeight: 600 }}>Split Between:</Typography>
                          <FormGroup row sx={{ gap: { xs: 0.5, sm: 1.5 } }}>
                            {members.map((m) => (
                              <FormControlLabel
                                key={m.MemberId}
                                control={
                                  <Checkbox
                                    checked={!!selectedSplits[m.MemberId]}
                                    onChange={() => setSelectedSplits((p) => ({ ...p, [m.MemberId]: !p[m.MemberId] }))}
                                    sx={{ color: colors.primaryNeon, '&.Mui-checked': { color: colors.primaryNeon } }}
                                  />
                                }
                                label={<Typography sx={{ color: colors.textPrimary, fontSize: { xs: '0.85rem', sm: '1rem' } }}>{m.Name}</Typography>}
                              />
                            ))}
                          </FormGroup>
                          <Typography variant="caption" sx={{ color: colors.warning, mt: 0.5, display: 'block' }}>
                            ⚠️ Select ONLY people who need to pay back (Payer is excluded from split)
                          </Typography>
                        </Grid>
                      </Grid>

                      <Button                        variant="contained"
                        startIcon={<ReceiptIcon />}
                        onClick={handleAddExpense}
                        fullWidth={isMobile}
                        sx={{ mt: 3, background: `linear-gradient(135deg, ${colors.success}, ${colors.successNeon})`, borderRadius: 3, px: 5, py: 1.2, fontWeight: 700 }}
                      >
                        Add Expense
                      </Button>
                    </CardContent>
                  </Card>
                </Zoom>

                {/* Stats Cards */}
                <Grid container spacing={2} sx={{ mb: 3, justifyContent: 'center' }}>
                  {[
                    { icon: <AttachMoneyIcon sx={{ fontSize: { xs: 36, sm: 50 }, color: colors.primaryNeon }} />, value: `₹${totalSpent.toFixed(2)}`, label: 'TOTAL SPENT', gradient: `linear-gradient(135deg, ${alpha(colors.primary, 0.2)}, ${alpha(colors.primaryNeon, 0.1)})`, border: alpha(colors.primaryNeon, 0.3), color: colors.primaryNeon },
                    { icon: <ReceiptIcon sx={{ fontSize: { xs: 36, sm: 50 }, color: colors.secondaryNeon }} />, value: expenses.length, label: 'EXPENSES LOGGED', gradient: `linear-gradient(135deg, ${alpha(colors.secondary, 0.2)}, ${alpha(colors.secondaryNeon, 0.1)})`, border: alpha(colors.secondaryNeon, 0.3), color: colors.secondaryNeon },
                    { icon: <PeopleIcon sx={{ fontSize: { xs: 36, sm: 50 }, color: colors.successNeon }} />, value: members.length, label: 'TOTAL MEMBERS', gradient: `linear-gradient(135deg, ${alpha(colors.success, 0.2)}, ${alpha(colors.successNeon, 0.1)})`, border: alpha(colors.successNeon, 0.3), color: colors.successNeon },
                  ].map((stat, i) => (
                    <Grid item xs={12} sm={4} key={i}>
                      <Paper sx={{ p: { xs: 2, sm: 3 }, textAlign: 'center', borderRadius: 4, background: stat.gradient, border: `1px solid ${stat.border}`, backdropFilter: 'blur(10px)', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                        {stat.icon}
                        <Typography variant="h3" sx={{ fontWeight: 800, color: stat.color, fontSize: { xs: '1.8rem', sm: '2.5rem' } }}>{stat.value}</Typography>
                        <Typography variant="caption" sx={{ color: colors.textSecondary, fontWeight: 600, letterSpacing: 1, fontSize: { xs: '0.65rem', sm: '0.75rem' } }}>{stat.label}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                {/* Expenses Table */}
                <Paper sx={{ borderRadius: 4, overflow: 'auto', ...glassCard, '& .MuiTableCell-root': { borderColor: colors.glassBorder, color: colors.textPrimary } }}>
                  <Table sx={{ minWidth: isMobile ? 600 : 1100 }}>
                    <TableHead sx={{ background: alpha(colors.primaryNeon, 0.1) }}>
                      <TableRow>
                        {['Date', 'Description', 'Amount', 'Paid By', 'Category', 'Split With', "Each Member's Share (₹)", 'Actions'].map((h) => (
                          <TableCell key={h} sx={{ fontWeight: 700, color: colors.textPrimary, whiteSpace: 'nowrap', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{h}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {expenses.map((e) => {
                        const isEditing = editingExpenseId === e.ExpenseId;
                        const shares = calculateMemberShares(e);
                        return (
                          <TableRow key={e.ExpenseId} sx={{ '&:hover': { background: alpha(colors.glassBg, 0.3) } }}>
                            {isEditing ? (
                              <>
                                <TableCell>
                                  <DatePicker value={editExpenseDate} onChange={setEditExpenseDate} slotProps={{ textField: { size: 'small', sx: { width: 130, '& .MuiInputBase-input': { color: 'white' } } } }} />
                                </TableCell>
                                <TableCell><TextField size="small" value={editDesc} onChange={(x) => setEditDesc(x.target.value)} sx={{ minWidth: 120 }} /></TableCell>
                                <TableCell><TextField size="small" type="number" value={editAmount} onChange={(x) => setEditAmount(x.target.value)} sx={{ width: 90 }} /></TableCell>
                                <TableCell>
                                  <Select size="small" value={editPayerId} onChange={(x) => setEditPayerId(x.target.value)} sx={{ minWidth: 100 }}>
                                    {members.map((m) => <MenuItem key={m.MemberId} value={m.MemberId}>{m.Name}</MenuItem>)}
                                  </Select>
                                </TableCell>
                                <TableCell>
                                  <Select size="small" value={editCategory} onChange={(x) => setEditCategory(x.target.value)}>
                                    {Object.keys(categoryDisplay).map((k) => <MenuItem key={k} value={k}>{k}</MenuItem>)}
                                  </Select>
                                </TableCell>
                                <TableCell>
                                  <Stack direction="row" flexWrap="wrap">
                                    {members.map((m) => (
                                      <FormControlLabel key={m.MemberId} control={<Checkbox size="small" checked={!!editSelectedSplits[m.MemberId]} onChange={() => setEditSelectedSplits((p) => ({ ...p, [m.MemberId]: !p[m.MemberId] }))} />} label={<Typography sx={{ fontSize: '0.75rem' }}>{m.Name}</Typography>} />
                                    ))}
                                  </Stack>
                                </TableCell>
                                <TableCell><Typography variant="caption" color="text.secondary">Will update on save</Typography></TableCell>
                                <TableCell align="center">
                                  <Tooltip title="Save"><IconButton color="success" onClick={() => handleSaveEditExpense(e.ExpenseId)}><SaveIcon /></IconButton></Tooltip>
                                  <Tooltip title="Cancel"><IconButton color="error" onClick={() => setEditingExpenseId(null)}><CancelIcon /></IconButton></Tooltip>
                                </TableCell>
                              </>
                            ) : (
                              <>
                                <TableCell>
                                  <Chip icon={<CalendarTodayIcon sx={{ fontSize: 13 }} />} label={formatDate(e.Date)} size="small" variant="outlined" sx={{ borderColor: colors.glassBorder, color: colors.textPrimary, fontSize: '0.7rem' }} />
                                </TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{e.Description}</TableCell>
                                <TableCell sx={{ fontWeight: 700, color: colors.successNeon }}>₹{e.Amount.toFixed(2)}</TableCell>
                                <TableCell><Chip label={e.Payer} size="small" sx={{ background: getMemberColor(e.Payer), color: 'white', fontWeight: 600 }} /></TableCell>
                                <TableCell><Chip icon={getCategoryIcon(e.Category)} label={categoryDisplay[e.Category] || e.Category} size="small" sx={{ background: getCategoryGradient(e.Category), color: 'white', fontWeight: 600, fontSize: '0.7rem' }} /></TableCell>
                                <TableCell>
                                  <Stack direction="row" spacing={0.5} flexWrap="wrap">
                                    {(e.SplitWith || []).map((name) => <Chip key={name} label={name} size="small" sx={{ background: getMemberColor(name), color: 'white', fontSize: '0.7rem' }} />)}
                                  </Stack>
                                </TableCell>
                                <TableCell sx={{ minWidth: 200 }}>
                                  <Stack spacing={0.5}>
                                    {Object.entries(shares).map(([member, sd]) => (
                                      <Tooltip key={member} title={sd.message} arrow placement="left">
                                        <Chip
                                          size="small"
                                          avatar={<Avatar sx={{ bgcolor: getMemberColor(member), width: 22, height: 22, fontSize: '0.65rem' }}>{member[0]}</Avatar>}
                                          label={sd.role === 'paid' ? `${member}: ₹${sd.amount.toFixed(2)} ✓` : `${member}: ₹${sd.amount.toFixed(2)} → ${sd.owesTo}`}
                                          sx={{ background: sd.role === 'paid' ? alpha(colors.successNeon, 0.2) : alpha(colors.warning, 0.2), color: sd.role === 'paid' ? colors.successNeon : colors.warning, justifyContent: 'flex-start', '& .MuiChip-label': { whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '0.7rem' } }}
                                        />
                                      </Tooltip>
                                    ))}
                                  </Stack>
                                </TableCell>
                                <TableCell align="center">
                                  <Tooltip title="Edit"><IconButton sx={{ color: colors.primaryNeon }} onClick={() => startEditExpense(e)}><EditIcon /></IconButton></Tooltip>
                                  <Tooltip title="Delete"><IconButton sx={{ color: colors.error }} onClick={() => handleDeleteExpense(e.ExpenseId)}><DeleteIcon /></IconButton></Tooltip>
                                </TableCell>
                              </>
                            )}
                          </TableRow>
                        );
                      })}
                      {expenses.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={8} align="center" sx={{ py: 8 }}>
                            <EmojiEmotionsIcon sx={{ fontSize: 60, color: colors.textSecondary, mb: 2, opacity: 0.5 }} />
                            <Typography variant="h6" color={colors.textSecondary}>No expenses yet. Add your first expense!</Typography>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </Paper>
              </Box>
            </Fade>
          )}

          {/* ─── ANALYTICS TAB ───────────────────────────────────────────── */}
          {activeTab === 1 && (
            <Fade in timeout={400}>
              <Box sx={{ pb: isMobile ? 8 : 0 }}>

                {/* Filters */}
                <Zoom in timeout={300}>
                  <Card sx={{ mb: 3, ...glassCard }}>
                    <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
                        <SearchIcon sx={{ color: colors.primaryNeon }} /> Filter Expenses
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                          <DatePicker label="Start Date" value={startDate} onChange={setStartDate} slotProps={{ textField: { fullWidth: true, sx: inputSx } }} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <DatePicker label="End Date" value={endDate} onChange={setEndDate} slotProps={{ textField: { fullWidth: true, sx: inputSx } }} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <FormControl fullWidth sx={inputSx}>
                            <InputLabel>Category</InputLabel>
                            <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} label="Category">
                              <MenuItem value="all">All Categories</MenuItem>
                              {Object.entries(categoryDisplay).map(([k, v]) => <MenuItem key={k} value={k}>{v}</MenuItem>)}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Button fullWidth variant="outlined" startIcon={<ClearIcon />} onClick={() => { setStartDate(dayjs().startOf('month')); setEndDate(dayjs()); setSelectedCategory('all'); }} sx={{ height: 56, borderColor: colors.primaryNeon, color: colors.primaryNeon, borderRadius: 2 }}>
                            Clear Filters
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Button fullWidth variant="contained" startIcon={<FileDownloadIcon />} onClick={exportToCSV} sx={{ height: 56, background: `linear-gradient(135deg, ${colors.success}, ${colors.successNeon})`, borderRadius: 2 }}>
                            Export CSV
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Zoom>

                {/* Summary Stats */}
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {[
                    { label: 'Total (Filtered)', value: `₹${totalFilteredAmount.toFixed(2)}`, color: colors.successNeon },
                    { label: 'Transactions', value: filteredExpenses.length, color: colors.primaryNeon },
                    { label: 'Categories', value: Object.keys(categorySummary).length, color: colors.warning },
                    { label: 'Date Range', value: `${startDate.format('DD MMM')} – ${endDate.format('DD MMM')}`, color: colors.textPrimary, small: true },
                  ].map((s, i) => (
                    <Grid item xs={6} sm={3} key={i}>
                      <Paper sx={{ p: { xs: 1.5, sm: 2.5 }, textAlign: 'center', borderRadius: 3, background: alpha(colors.glassBg, 0.5), border: `1px solid ${colors.glassBorder}` }}>
                        <Typography variant="caption" sx={{ color: colors.textSecondary, display: 'block' }}>{s.label}</Typography>
                        <Typography variant={s.small ? 'body2' : 'h5'} sx={{ color: s.color, fontWeight: 700, mt: 0.5, fontSize: s.small ? { xs: '0.75rem', sm: '0.9rem' } : { xs: '1.2rem', sm: '1.5rem' } }}>{s.value}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                {/* Category Summary */}
                <Card sx={{ mb: 3, borderRadius: 4, background: '#ffffff15', backdropFilter: 'blur(10px)', border: `1px solid ${colors.glassBorder}` }}>
                  <CardContent sx={{ p: { xs: 1.5, sm: 3 } }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.textPrimary }}>📊 Category-wise Summary</Typography>
                    <Box sx={{ overflowX: 'auto' }}>
                      <Table size={isMobile ? 'small' : 'medium'}>
                        <TableHead>
                          <TableRow>
                            {['Category', 'Count', 'Total (₹)', 'Average'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, whiteSpace: 'nowrap', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{h}</TableCell>)}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {Object.entries(categorySummary).map(([cat, data]) => (
                            <TableRow key={cat}>
                              <TableCell><Chip icon={getCategoryIcon(cat)} label={isMobile ? cat : (categoryDisplay[cat] || cat)} size="small" sx={{ background: getCategoryGradient(cat), color: 'white', fontSize: '0.7rem' }} /></TableCell>
                              <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{data.count}</TableCell>
                              <TableCell sx={{ color: colors.successNeon, fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>₹{data.total.toFixed(2)}</TableCell>
                              <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>₹{(data.total / data.count).toFixed(2)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </CardContent>
                </Card>

                {/* Member Summary */}
                <Card sx={{ mb: 3, borderRadius: 4, background: '#ffffff15', backdropFilter: 'blur(10px)', border: `1px solid ${colors.glassBorder}` }}>
                  <CardContent sx={{ p: { xs: 1.5, sm: 3 } }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.textPrimary }}>👥 Member Summary</Typography>
                    <Box sx={{ overflowX: 'auto' }}>
                      <Table size={isMobile ? 'small' : 'medium'}>
                        <TableHead>
                          <TableRow>
                            {['Member', 'Payments', 'Total Paid', 'Avg', 'Action'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{h}</TableCell>)}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {members.map((member) => {
                            const s = memberSummary[member.Name] || { total: 0, count: 0 };
                            return (
                              <TableRow key={member.MemberId}>
                                <TableCell>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Avatar sx={{ background: getMemberColor(member.Name), width: 28, height: 28, fontSize: '0.8rem' }}>{member.Name[0]}</Avatar>
                                    <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{member.Name}</Typography>
                                  </Box>
                                </TableCell>
                                <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{s.count}</TableCell>
                                <TableCell sx={{ color: colors.successNeon, fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>₹{s.total.toFixed(2)}</TableCell>
                                <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>₹{s.count > 0 ? (s.total / s.count).toFixed(2) : '0'}</TableCell>
                                <TableCell>
                                  <Button size="small" variant="outlined" startIcon={isMobile ? null : <PersonIcon />} onClick={() => setSelectedDetailMember(selectedDetailMember === member.Name ? 'all' : member.Name)} sx={{ borderColor: colors.primaryNeon, color: colors.primaryNeon, fontSize: { xs: '0.65rem', sm: '0.75rem' }, minWidth: 0, px: { xs: 1, sm: 2 } }}>
                                    {selectedDetailMember === member.Name ? 'Hide' : 'Details'}
                                  </Button>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </Box>
                  </CardContent>
                </Card>

                {/* Member Detail */}
                {selectedDetailMember !== 'all' && (() => {
                  const { totalPaid, totalOwed, totalShouldPay, netBalance, details } = getMemberTotals(selectedDetailMember);
                  return (
                    <Zoom in>
                      <Card sx={{ mb: 3, borderRadius: 4, background: `linear-gradient(135deg, ${alpha(colors.primaryNeon, 0.1)}, ${alpha(colors.secondaryNeon, 0.1)})`, border: `2px solid ${colors.primaryNeon}` }}>
                        <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                              <Avatar sx={{ background: getMemberColor(selectedDetailMember), width: { xs: 45, sm: 60 }, height: { xs: 45, sm: 60 }, fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 'bold' }}>{selectedDetailMember[0]}</Avatar>
                              <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, fontSize: { xs: '1rem', sm: '1.25rem' } }}>{selectedDetailMember}'s Details</Typography>
                                <Typography variant="caption" color="text.secondary">All expenses involving {selectedDetailMember}</Typography>
                              </Box>
                            </Box>
                            <Button variant="contained" startIcon={<ClearIcon />} onClick={() => setSelectedDetailMember('all')} sx={{ background: colors.error }}>Close</Button>
                          </Box>

                          <Grid container spacing={2} sx={{ mb: 3 }}>
                            {[
                              { label: 'Total Paid', value: totalPaid, color: colors.successNeon },
                              { label: 'Total Owed', value: totalOwed, color: colors.warning },
                              { label: 'Should Pay', value: totalShouldPay, color: colors.info },
                              { label: 'Net Balance', value: netBalance, color: netBalance >= 0 ? colors.successNeon : colors.error, prefix: netBalance >= 0 ? '+' : '' },
                            ].map((s, i) => (
                              <Grid item xs={6} sm={3} key={i}>
                                <Paper sx={{ p: { xs: 1.5, sm: 2 }, textAlign: 'center', background: alpha(s.color, 0.1) }}>
                                  <Typography variant="caption" color="gray" sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem' } }}>{s.label}</Typography>
                                  <Typography variant="h6" sx={{ color: s.color, fontWeight: 700, fontSize: { xs: '1rem', sm: '1.25rem' } }}>{s.prefix || ''}₹{Math.abs(s.value).toFixed(2)}</Typography>
                                </Paper>
                              </Grid>
                            ))}
                          </Grid>

                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.textPrimary }}>📋 Expense Breakdown</Typography>
                          <Box sx={{ overflowX: 'auto' }}>
                            <Table size={isMobile ? 'small' : 'medium'}>
                              <TableHead>
                                <TableRow sx={{ background: alpha(colors.primaryNeon, 0.2) }}>
                                  {['Date', 'Description', 'Total', 'Paid By', 'Share', 'Role', 'Split With'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, whiteSpace: 'nowrap', fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>{h}</TableCell>)}
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {details.map((d, idx) => (
                                  <TableRow key={idx}>
                                    <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>{formatDate(d.date)}</TableCell>
                                    <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>{d.description}</TableCell>
                                    <TableCell sx={{ color: colors.primaryNeon, fontWeight: 600, fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>₹{d.totalAmount.toFixed(2)}</TableCell>
                                    <TableCell><Chip label={d.paidBy} size="small" sx={{ background: getMemberColor(d.paidBy), color: 'white', fontSize: '0.65rem' }} /></TableCell>
                                    <TableCell sx={{ color: d.role === 'paid' ? colors.successNeon : colors.warning, fontWeight: 600, fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>₹{d.memberShare.toFixed(2)}</TableCell>
                                    <TableCell><Chip label={d.role === 'paid' ? 'Paid' : 'Owes'} size="small" sx={{ background: d.role === 'paid' ? colors.successNeon : colors.warning, color: 'white', fontSize: '0.65rem' }} /></TableCell>
                                    <TableCell><Stack direction="row" spacing={0.5} flexWrap="wrap">{d.splitWith.map((n) => <Chip key={n} label={n} size="small" sx={{ background: getMemberColor(n), color: 'white', fontSize: '0.65rem' }} />)}</Stack></TableCell>
                                  </TableRow>
                                ))}
                                {details.length === 0 && <TableRow><TableCell colSpan={7} align="center"><Typography color="text.secondary">No expenses found</Typography></TableCell></TableRow>}
                              </TableBody>
                            </Table>
                          </Box>
                        </CardContent>
                      </Card>
                    </Zoom>
                  );
                })()}

                {/* Grouped Expenses */}
                <Card sx={{ borderRadius: 4, ...glassCard }}>
                  <CardContent sx={{ p: { xs: 1.5, sm: 3 } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, gap: 2, flexWrap: 'wrap' }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, fontSize: { xs: '0.95rem', sm: '1.1rem' } }}>
                        📅 {viewType === 'daily' ? 'Daily' : viewType === 'weekly' ? 'Weekly' : 'Monthly'} Breakdown
                      </Typography>
                      <FormControl size="small" sx={{ minWidth: 110, ...inputSx }}>
                        <Select value={viewType} onChange={(e) => setViewType(e.target.value)}>
                          <MenuItem value="daily">Daily</MenuItem>
                          <MenuItem value="weekly">Weekly</MenuItem>
                          <MenuItem value="monthly">Monthly</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    {groupedExpenses.map((group, idx) => (
                      <Paper key={idx} sx={{ mb: 2, p: { xs: 1.5, sm: 2 }, background: alpha(colors.glassBg, 0.3), borderRadius: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.primaryNeon }}>
                            {viewType === 'daily' ? group.date.format('DD MMMM YYYY') : viewType === 'weekly' ? `Week ${group.key.split('-W')[1]} – ${group.date.format('MMM YYYY')}` : group.date.format('MMMM YYYY')}
                          </Typography>
                          <Chip label={`₹${group.total.toFixed(2)}`} size="small" sx={{ bgcolor: alpha(colors.successNeon, 0.2), color: colors.successNeon, fontWeight: 600 }} />
                        </Box>
                        <Box sx={{ overflowX: 'auto' }}>
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                {['Date', 'Description', 'Amount', 'Paid By', 'Category'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{h}</TableCell>)}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {group.items.map((exp, i) => (
                                <TableRow key={i}>
                                  <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{formatDate(exp.Date)}</TableCell>
                                  <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{exp.Description}</TableCell>
                                  <TableCell sx={{ color: colors.successNeon, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>₹{exp.Amount.toFixed(2)}</TableCell>
                                  <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{exp.Payer}</TableCell>
                                  <TableCell sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{exp.Category}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </Paper>
                    ))}
                    {groupedExpenses.length === 0 && <Box sx={{ textAlign: 'center', py: 4 }}><Typography color="text.secondary">No expenses for selected filters.</Typography></Box>}
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          )}

          {/* ─── BALANCES TAB ────────────────────────────────────────────── */}
          {activeTab === 2 && (
            <Fade in timeout={400}>
              <Box sx={{ pb: isMobile ? 8 : 0 }}>
                <Paper sx={{ borderRadius: 4, overflow: 'auto', ...glassCard, '& .MuiTableCell-root': { borderColor: colors.glassBorder, color: colors.textPrimary } }}>
                  <Table size={isMobile ? 'small' : 'medium'}>
                    <TableHead sx={{ background: alpha(colors.primaryNeon, 0.1) }}>
                      <TableRow>
                        {['Member', 'Total Paid (₹)', 'Total Share (₹)', 'Net Balance (₹)'].map((h) => <TableCell key={h} sx={{ fontWeight: 700, whiteSpace: 'nowrap', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{h}</TableCell>)}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {members.map((m) => {
                        const bal = memberBalances[m.Name] || { paid: 0, share: 0, net: 0 };
                        return (
                          <TableRow key={m.MemberId}>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Avatar sx={{ background: getAvatarGradient(m.Name), width: { xs: 34, sm: 45 }, height: { xs: 34, sm: 45 }, fontWeight: 700, color: 'white', fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>{m.Name[0]}</Avatar>
                                <Typography fontWeight={700} sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }}>{m.Name}</Typography>
                              </Box>
                            </TableCell>
                            <TableCell sx={{ fontWeight: 600, color: colors.successNeon, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>₹{bal.paid.toFixed(2)}</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: colors.warning, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>₹{bal.share.toFixed(2)}</TableCell>
                            <TableCell>
                              <Chip
                                icon={bal.net >= 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
                                label={`${bal.net >= 0 ? '+' : ''}₹${bal.net.toFixed(2)}`}
                                size={isMobile ? 'small' : 'medium'}
                                sx={{ background: bal.net >= 0 ? `linear-gradient(135deg, ${colors.success}, ${colors.successNeon})` : `linear-gradient(135deg, ${colors.error}, ${colors.secondaryNeon})`, color: 'white', fontWeight: 700, '& .MuiChip-icon': { color: 'white' } }}
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                  <Box sx={{ p: 2, bgcolor: alpha(colors.warning, 0.1), m: 2, borderRadius: 2 }}>
                    <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                      💡 <strong>Balances:</strong>{' '}
                      <span style={{ color: colors.successNeon }}>+₹ = Owed money</span> &nbsp;|&nbsp;
                      <span style={{ color: colors.error }}>-₹ = Owes money</span>
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Fade>
          )}

          {/* ─── SETTLE UP TAB ───────────────────────────────────────────── */}
          {activeTab === 3 && (
            <Fade in timeout={400}>
              <Box sx={{ pb: isMobile ? 8 : 0 }}>
                <Card sx={{ borderRadius: 4, ...glassCard }}>
                  <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1.5, color: colors.textPrimary, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
                      <StarsIcon sx={{ color: colors.successNeon }} /> Settlement Plan
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 3 }}>Direct payments to clear all debts</Typography>

                    {settlements.length === 0 ? (
                      <Box sx={{ textAlign: 'center', py: 6 }}>
                        <CheckCircleIcon sx={{ fontSize: { xs: 60, sm: 80 }, color: colors.successNeon, mb: 2 }} />
                        <Typography variant="h5" sx={{ color: colors.successNeon, fontWeight: 700, mb: 1, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>All settled up! 🎉</Typography>
                        <Typography variant="body1" sx={{ color: colors.textSecondary }}>Everyone is balanced. Great job!</Typography>
                      </Box>
                    ) : (
                      <Stack spacing={2}>
                        {settlements.map((s, i) => (
                          <Slide direction="left" in timeout={400 + i * 100} key={i}>
                            <Paper sx={{ p: { xs: 2, sm: 2.5 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: 3, background: alpha(colors.glassBg, 0.5), border: `1px solid ${colors.glassBorder}`, flexWrap: 'wrap', gap: 1, '&:hover': { transform: 'translateX(6px)', transition: 'transform 0.3s' } }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap' }}>
                                <Avatar sx={{ background: getMemberColor(s.from), width: { xs: 34, sm: 42 }, height: { xs: 34, sm: 42 }, fontWeight: 700 }}>{s.from[0]}</Avatar>
                                <Typography sx={{ color: colors.textPrimary, fontWeight: 600, fontSize: { xs: '0.85rem', sm: '1rem' } }}>pays</Typography>
                                <Typography sx={{ fontWeight: 800, background: `linear-gradient(135deg, ${colors.primaryNeon}, ${colors.successNeon})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>₹{s.amount.toFixed(2)}</Typography>
                                <Typography sx={{ color: colors.textPrimary, fontWeight: 600, fontSize: { xs: '0.85rem', sm: '1rem' } }}>to</Typography>
                                <Avatar sx={{ background: getMemberColor(s.to), width: { xs: 34, sm: 42 }, height: { xs: 34, sm: 42 }, fontWeight: 700 }}>{s.to[0]}</Avatar>
                                <Typography sx={{ color: colors.textPrimary, fontWeight: 600, fontSize: { xs: '0.85rem', sm: '1rem' } }}>{s.to}</Typography>
                              </Box>
                              <Chip label={`#${i + 1}`} size="small" sx={{ background: colors.primaryNeon, color: 'white', fontWeight: 700 }} />
                            </Paper>
                          </Slide>
                        ))}
                      </Stack>
                    )}
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          )}

        </Container>

        {/* Snackbar */}
        <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar((s) => ({ ...s, open: false }))} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} sx={{ mb: isMobile ? 8 : 0 }}>
          <Alert severity={snackbar.severity} sx={{ borderRadius: 3, boxShadow: 3, fontWeight: 500, background: colors.glassBg, backdropFilter: 'blur(10px)', color: colors.textPrimary }}>
            {snackbar.message}
          </Alert>
        </Snackbar>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0,0) rotate(0deg); }
            50% { transform: translate(20px,-20px) rotate(180deg); }
          }
          .MuiPickersDay-root { color: white !important; }
          .MuiPickersYear-yearButton { color: white !important; }
          .MuiPickersMonth-monthButton { color: white !important; }
          .MuiPickersPopper-paper { background-color: #1e293b !important; }
          .MuiPickersDay-root.Mui-selected { background-color: #6366f1 !important; }
          .MuiDialog-container .MuiPaper-root { background-color: #1e293b !important; }
          .MuiPickersToolbar-root { background-color: #6366f1 !important; }
        `}</style>
      </Box>
    </LocalizationProvider>
  );
}