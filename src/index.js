import "./styles.css";

const onClickAdd = () => {
  //テキストボックス値取得＋入力エリア初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //Todo内容テキスト（Divの一番上の要素）
    const text = addTarget.firstElementChild.innerText;

    //div以下を消去
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      //押されたら戻すボタンの親タグを完了リストから削除
      document.getElementById("complete-list").removeChild(deleteTarget);

      //Todoテキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      //未完了リストに追加
      createIncompleteList(text);
    });

    //divタグに要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
  });

  //divの子要素を設定
  div.appendChild(li); //Liを入れる
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
