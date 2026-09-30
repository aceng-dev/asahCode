document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "KEY_TRANS";
  const renderEvent = "transaction:updated";

  const submitForm = document.getElementById("transactionForm");
  const incomeList = document.getElementById("incomeList");
  const expendList = document.getElementById("expenseList");
  const totalIncomeEl = document.getElementById("totalIncome");
  const totalExpenseEl = document.getElementById("totalExpense");
  const balanceEl = document.getElementById("balance");

  let transaction = JSON.parse(localStorage.getItem(storageKey)) || [];
  
  let editingId = null;

  function generateId() {
    return +new Date();
  }

  function genrObj(id, title, amount, date, type) {
    return {
      id,
      title,
      amount,
      date,
      type,
    };
  }

  function findId(transId) {
    for (const transItem of transaction) {
      if (transItem.id === transId) {
        return transItem;
      }
    }
    return null;
  }

  function findIndexById(transId) {
    for (let i = 0; i < transaction.length; i++) {
      if (transaction[i].id === transId) {
        return i;
      }
    }
    return -1;
  }
  function toggleType(transId) {
  const transTarget = findId(transId);
  if (transTarget === null) return;

  transTarget.type = transTarget.type === "income" ? "expense" : "income";
  document.dispatchEvent(new Event(renderEvent));
}

  function getFormData() {
    const title = document
      .getElementById("transactionFormTitleInput")
      .value.trim();
    const amount = Number(
      document.getElementById("transactionFormAmountInput").value,
    );
    const date = document.getElementById("transactionFormDateInput").value;
    const type = document.getElementById("transactionFormTypeSelect").value;

    if (title === "" || amount < 1) {
      alert(
        "Judul Tidak Boleh Kosong Dan/Atau Nominal Tidak Boleh Kurang Dari 1",
      );
      return null;
    }

    return { title, amount, date, type };
  }

  function updateDashboard() {
    let totalIncome = 0;
    let totalExpense = 0;

    for (const t of transaction) {
      if (t.type === "income") {
        totalIncome += t.amount;
      } else {
        totalExpense += t.amount;
      }
    }

    const balance = totalIncome - totalExpense;

    if (totalIncomeEl) totalIncomeEl.innerHTML = totalIncome;
    if (totalExpenseEl) totalExpenseEl.innerHTML = totalExpense;
    if (balanceEl) balanceEl.innerHTML = balance;
  }


  function addTranscation() {
    const data = getFormData();
    if (data === null) return false;

    const newTrans = genrObj(
      generateId(),
      data.title,
      data.amount,
      data.date,
      data.type,
    );

    transaction.unshift(newTrans);
    document.dispatchEvent(new Event(renderEvent));
    return true;
  }

  function editTrans(transId) {
    const transTarget = findId(transId);
    if (transTarget === null) return;

    document.getElementById("transactionFormTitleInput").value =
      transTarget.title;
    document.getElementById("transactionFormAmountInput").value =
      transTarget.amount;
    document.getElementById("transactionFormDateInput").value =
      transTarget.date;
    document.getElementById("transactionFormTypeSelect").value =
      transTarget.type;

    editingId = transId;
  }

  
  function saveEdit() {
    const data = getFormData();
    if (data === null) return false;

    const transTarget = findId(editingId);
    if (transTarget === null) {
      editingId = null;
      return false;
    }

   
    transTarget.title = data.title;
    transTarget.amount = data.amount;
    transTarget.date = data.date;
    transTarget.type = data.type;

    editingId = null; 
    document.dispatchEvent(new Event(renderEvent));
    return true;
  }

  function removeTrans(transId) {
    const index = findIndexById(transId);
    if (index === -1) return;

    transaction.splice(index, 1);

  
    if (transId === editingId) {
      editingId = null;
      submitForm.reset();
    }

    document.dispatchEvent(new Event(renderEvent));
  }

  function makeTransaction(objekTf) {
  const item = document.createElement("div");
  item.setAttribute("data-testid", "transactionItem");
  item.setAttribute("data-transactionid", objekTf.id);

  const title = document.createElement("h3");
  title.setAttribute("data-testid", "transactionItemTitle");
  title.innerText = objekTf.title;

  const amount = document.createElement("p");
  amount.setAttribute("data-testid", "transactionItemAmount");
  amount.innerText = "Nominal: Rp" + objekTf.amount;

  const date = document.createElement("p");
  date.setAttribute("data-testid", "transactionItemDate");
  date.innerText = "Tanggal: " + objekTf.date;

  const type = document.createElement("p");
  type.setAttribute("data-testid", "transactionItemType");
  type.innerText =
    "Tipe: " + (objekTf.type === "income" ? "Pemasukan" : "Pengeluaran");

  const actions = document.createElement("div");

  const editTypeButton = document.createElement("button");
  editTypeButton.setAttribute("data-testid", "transactionItemEditTypeButton");
  editTypeButton.textContent = "Ubah Tipe";
  editTypeButton.addEventListener("click", function () {
    toggleType(objekTf.id);
  });

  const editButton = document.createElement("button");
  editButton.setAttribute("data-testid", "transactionItemEditButton");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function () {
    editTrans(objekTf.id);
  });

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("data-testid", "transactionItemDeleteButton");
  deleteButton.textContent = "Hapus";
  deleteButton.addEventListener("click", function () {
    removeTrans(objekTf.id);
  });

  actions.append(editTypeButton, editButton, deleteButton);
  item.append(title, amount, date, type, actions);
  return item;
}

  document.addEventListener(renderEvent, function () {
    incomeList.innerHTML = "";
    expendList.innerHTML = "";

    for (const transItem of transaction) {
      const transElement = makeTransaction(transItem);
      if (transItem.type === "income") {
        incomeList.append(transElement);
      } else {
        expendList.append(transElement);
      }
    }

    updateDashboard();
    localStorage.setItem(storageKey, JSON.stringify(transaction));
  });

  submitForm.addEventListener("submit", function (ev) {
    ev.preventDefault();


    const isSuccess = editingId === null ? addTranscation() : saveEdit();
    if (isSuccess) {
      submitForm.reset();
    }
  });
  const searchForm = document.getElementById("searchTransactionForm");
searchForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
});
  document.dispatchEvent(new Event(renderEvent));
});