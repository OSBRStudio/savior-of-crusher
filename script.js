// ============================================================
//  暈船仔拯救器 - 完整 JavaScript
//  完全複製貼上即可
// ============================================================

// ===== 1. 題庫（完整 300 題） =====
const QUESTION_BANK = [
    // ===== 注意力與行為（第1-60題） =====
    { id: 1, category: "注意力與行為", text: "你每天會點開他的社群頁面幾次？", options: ["0次", "1-3次", "3次以上"], scores: [0, 1, 2] },
    { id: 2, category: "注意力與行為", text: "你會不會刻意發限動／貼文只為了讓他看到？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 3, category: "注意力與行為", text: "他發限動時你會第一時間點進去看嗎？", options: ["不會", "有時會", "一定會"], scores: [0, 1, 2] },
    { id: 4, category: "注意力與行為", text: "你會為了等他的訊息而刻意熬夜或不睡覺嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 5, category: "注意力與行為", text: "你會反覆點開你們的對話框即使沒有新訊息？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 6, category: "注意力與行為", text: "你會把他設為「最愛」或「置頂」嗎？", options: ["不會", "考慮過", "已經設了"], scores: [0, 1, 2] },
    { id: 7, category: "注意力與行為", text: "你會把他的通知聲音跟其他人區分開來嗎？", options: ["不會", "想過但沒做", "已經區分了"], scores: [0, 1, 2] },
    { id: 8, category: "注意力與行為", text: "手機響的時候你會希望／以為是他嗎？", options: ["不會", "有時候會", "每次都這樣想"], scores: [0, 1, 2] },
    { id: 9, category: "注意力與行為", text: "你會回頭翻你們很久以前的對話紀錄嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 10, category: "注意力與行為", text: "你會不會截圖你們的對話給朋友看？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 11, category: "注意力與行為", text: "你會不會去查看他追蹤了哪些新對象？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 12, category: "注意力與行為", text: "你會偷偷存他的照片在手機裡嗎？", options: ["不會", "存了一兩張", "存了很多張"], scores: [0, 1, 2] },
    { id: 13, category: "注意力與行為", text: "你會去聽他喜歡的歌／看他喜歡的電影嗎？", options: ["不會", "稍微接觸", "會主動去研究"], scores: [0, 1, 2] },
    { id: 14, category: "注意力與行為", text: "你會不會刻意去他常去的地方「巧遇」？", options: ["不會", "想過但沒做", "做過了"], scores: [0, 1, 2] },
    { id: 15, category: "注意力與行為", text: "看到他的來電或訊息時你會緊張或心跳加速嗎？", options: ["不會", "有時會", "每次都會"], scores: [0, 1, 2] },
    { id: 16, category: "注意力與行為", text: "你會不會在社群上特別關注他的動態？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 17, category: "注意力與行為", text: "你會把他的對話框截圖設成桌面嗎？", options: ["不會", "想過但沒做", "已經設了"], scores: [0, 1, 2] },
    { id: 18, category: "注意力與行為", text: "你會計算他回覆訊息的「平均時間」嗎？", options: ["不會", "大概知道", "精確算過"], scores: [0, 1, 2] },
    { id: 19, category: "注意力與行為", text: "他換頭貼或改狀態時你會第一時間發現嗎？", options: ["不會", "有時會", "一定會"], scores: [0, 1, 2] },
    { id: 20, category: "注意力與行為", text: "你會去搜尋他前女友或前任的資訊嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 21, category: "注意力與行為", text: "你會因為他的社群發文內容而影響心情嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 22, category: "注意力與行為", text: "你會刻意讓自己「剛好」出現在他附近嗎？", options: ["不會", "想過但沒做", "做過了"], scores: [0, 1, 2] },
    { id: 23, category: "注意力與行為", text: "你會記住他的課表或行程嗎？", options: ["不會", "大概記得", "非常清楚"], scores: [0, 1, 2] },
    { id: 24, category: "注意力與行為", text: "你會把他的訊息設成「未讀」只為了晚點再開嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 25, category: "注意力與行為", text: "你會去翻他的追蹤名單看有沒有新面孔嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 26, category: "注意力與行為", text: "你會特別注意他的穿搭或外型變化嗎？", options: ["不會", "稍微注意", "非常注意"], scores: [0, 1, 2] },
    { id: 27, category: "注意力與行為", text: "你會把他的生日設成行事曆提醒嗎？", options: ["不會", "想過但沒做", "已經設了"], scores: [0, 1, 2] },
    { id: 28, category: "注意力與行為", text: "你會為了看他而故意經過他的辦公室或教室嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 29, category: "注意力與行為", text: "你會把他的對話紀錄備份起來嗎？", options: ["不會", "想過但沒做", "已經備份了"], scores: [0, 1, 2] },
    { id: 30, category: "注意力與行為", text: "你會觀察他按了誰的貼文讚嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 31, category: "注意力與行為", text: "你會因為他而下載或註冊新的社群平台嗎？", options: ["不會", "想過但沒做", "已經做了"], scores: [0, 1, 2] },
    { id: 32, category: "注意力與行為", text: "你會把你們的合照設成桌布或收藏嗎？", options: ["不會", "想過但沒做", "已經設了"], scores: [0, 1, 2] },
    { id: 33, category: "注意力與行為", text: "你會因為他改變自己的社群隱私設定嗎？", options: ["不會", "考慮過", "已經改了"], scores: [0, 1, 2] },
    { id: 34, category: "注意力與行為", text: "你會刻意在他發文後幾分鐘內按讚嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 35, category: "注意力與行為", text: "你會去計算他每天發幾篇限動嗎？", options: ["不會", "大概知道", "精確算過"], scores: [0, 1, 2] },
    { id: 36, category: "注意力與行為", text: "你會因為他的社群發文而情緒起伏很大嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 37, category: "注意力與行為", text: "你會特別留意他有沒有看你的限動嗎？", options: ["不會", "偶爾會", "一定會"], scores: [0, 1, 2] },
    { id: 38, category: "注意力與行為", text: "你會因為他沒看你的限動而感到失落嗎？", options: ["不會", "稍微失落", "非常失落"], scores: [0, 1, 2] },
    { id: 39, category: "注意力與行為", text: "你會把跟他有關的紀念品或小東西收藏起來嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 40, category: "注意力與行為", text: "你會去翻閱他以前的舊貼文或舊照片嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 41, category: "注意力與行為", text: "你會因為他而開始關注某個原本沒興趣的領域嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 42, category: "注意力與行為", text: "你會把他的對話備份到雲端或電腦裡嗎？", options: ["不會", "想過但沒做", "已經備份了"], scores: [0, 1, 2] },
    { id: 43, category: "注意力與行為", text: "你會因為他而改變自己的理髮或造型嗎？", options: ["不會", "稍微改變", "大幅改變"], scores: [0, 1, 2] },
    { id: 44, category: "注意力與行為", text: "你會因為他而購買跟他同款的衣服或物品嗎？", options: ["不會", "想過但沒做", "已經買了"], scores: [0, 1, 2] },
    { id: 45, category: "注意力與行為", text: "你會因為他而開始用某個特定的表情符號或用語嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 46, category: "注意力與行為", text: "你會特別關注他有沒有換頭貼或封面嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 47, category: "注意力與行為", text: "你會因為他而把鬧鐘設成他喜歡的音樂嗎？", options: ["不會", "想過但沒做", "已經設了"], scores: [0, 1, 2] },
    { id: 48, category: "注意力與行為", text: "你會因為他而研究他的興趣愛好嗎？", options: ["不會", "稍微研究", "深入研究"], scores: [0, 1, 2] },
    { id: 49, category: "注意力與行為", text: "你會因為他而開始注意某個品牌或某個地方嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 50, category: "注意力與行為", text: "你會因為他而特別打扮自己再去見面嗎？", options: ["不會", "偶爾會", "每次都這樣"], scores: [0, 1, 2] },
    { id: 51, category: "注意力與行為", text: "你會因為他而改變自己的社交圈嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 52, category: "注意力與行為", text: "你會因為他而開始使用某個他常用的App嗎？", options: ["不會", "想過但沒做", "已經用了"], scores: [0, 1, 2] },
    { id: 53, category: "注意力與行為", text: "你會因為他而記住他身邊所有人的名字嗎？", options: ["不會", "記得幾個", "全部記得"], scores: [0, 1, 2] },
    { id: 54, category: "注意力與行為", text: "你會因為他而把某個日期當作特別的日子嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 55, category: "注意力與行為", text: "你會因為他而改變自己的開車或通勤路線嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 56, category: "注意力與行為", text: "你每天會花多少時間在關注他的動態上？", options: ["幾乎沒有", "半小時內", "超過半小時"], scores: [0, 1, 2] },
    { id: 57, category: "注意力與行為", text: "你會因為他而放棄原本在看的美劇或動漫嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 58, category: "注意力與行為", text: "你會因為他而開始注意他用的香水或洗髮精品牌嗎？", options: ["不會", "稍微注意", "特別去查"], scores: [0, 1, 2] },
    { id: 59, category: "注意力與行為", text: "你會在朋友聚會時一直提到他嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 60, category: "注意力與行為", text: "你會因為他的狀態更新而影響自己要做的事情嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },

    // ===== 情緒與內心（第61-120題） =====
    { id: 61, category: "情緒與內心", text: "他沒回訊息的時候你會感到焦慮嗎？", options: ["不會", "有點焦慮", "非常焦慮"], scores: [0, 1, 2] },
    { id: 62, category: "情緒與內心", text: "你會因為他的情緒好壞而影響自己一整天嗎？", options: ["不會", "稍微影響", "完全被影響"], scores: [0, 1, 2] },
    { id: 63, category: "情緒與內心", text: "你會想像你們未來的發展（交往或結婚等）嗎？", options: ["不會", "偶爾想", "常常在想"], scores: [0, 1, 2] },
    { id: 64, category: "情緒與內心", text: "你會把他的言行拿來反覆分析或解讀嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 65, category: "情緒與內心", text: "你會因為他按了別人的讚而感到失落嗎？", options: ["不會", "稍微在意", "很難過"], scores: [0, 1, 2] },
    { id: 66, category: "情緒與內心", text: "你會不會覺得「他是特別的跟別人不同」？", options: ["不會", "好像有一點", "強烈這麼認為"], scores: [0, 1, 2] },
    { id: 67, category: "情緒與內心", text: "你會不會覺得他是你生活中很重要的人？", options: ["不會", "算重要", "非常重要"], scores: [0, 1, 2] },
    { id: 68, category: "情緒與內心", text: "你會因為他而改變自己的行程或計畫嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 69, category: "情緒與內心", text: "你會不會夢到他？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 70, category: "情緒與內心", text: "你會在他的社群上按讚所有內容嗎？", options: ["不會", "偶爾會", "每一則都按"], scores: [0, 1, 2] },
    { id: 71, category: "情緒與內心", text: "你會因為他提到別的異性而感到不安嗎？", options: ["不會", "稍微不安", "非常不安"], scores: [0, 1, 2] },
    { id: 72, category: "情緒與內心", text: "你會覺得自己不夠好配不上他嗎？", options: ["不會", "偶爾會這樣想", "常常這樣想"], scores: [0, 1, 2] },
    { id: 73, category: "情緒與內心", text: "你會幻想他主動來找你告白的場景嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 74, category: "情緒與內心", text: "你會在意他怎麼稱呼你（全名或綽號等）嗎？", options: ["不會", "稍微在意", "非常在意"], scores: [0, 1, 2] },
    { id: 75, category: "情緒與內心", text: "你不確定他對你的感覺時會感到痛苦嗎？", options: ["不會", "有點痛苦", "非常痛苦"], scores: [0, 1, 2] },
    { id: 76, category: "情緒與內心", text: "你會因為他而覺得自己變得很卑微嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 77, category: "情緒與內心", text: "你會因為他的一句稱讚而開心一整天嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 78, category: "情緒與內心", text: "你會因為他的冷淡而懷疑自己哪裡做錯嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 79, category: "情緒與內心", text: "你會覺得「沒有人比他更懂我」嗎？", options: ["不會", "稍微有這種感覺", "強烈這麼覺得"], scores: [0, 1, 2] },
    { id: 80, category: "情緒與內心", text: "你會因為他而放棄其他機會嗎？", options: ["不會", "考慮過", "已經放棄過了"], scores: [0, 1, 2] },
    { id: 81, category: "情緒與內心", text: "你會覺得沒有他生活就少了什麼嗎？", options: ["不會", "有點感覺", "強烈這麼覺得"], scores: [0, 1, 2] },
    { id: 82, category: "情緒與內心", text: "你會因為他的回覆長度而影響心情嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 83, category: "情緒與內心", text: "你會覺得他對你來說是「命中注定」的人嗎？", options: ["不會", "偶爾會這樣想", "常常這樣想"], scores: [0, 1, 2] },
    { id: 84, category: "情緒與內心", text: "你會因為他的已讀而心臟痛嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 85, category: "情緒與內心", text: "你會覺得自己的快樂完全取決於他嗎？", options: ["不會", "有時候會", "常常這麼覺得"], scores: [0, 1, 2] },
    { id: 86, category: "情緒與內心", text: "你會因為他而哭過嗎？", options: ["沒有", "流過一兩次淚", "哭過很多次"], scores: [0, 1, 2] },
    { id: 87, category: "情緒與內心", text: "你會因為他的訊息而傻笑嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 88, category: "情緒與內心", text: "你會覺得他對你來說是「非他不可」嗎？", options: ["不會", "偶爾有這種感覺", "強烈這麼覺得"], scores: [0, 1, 2] },
    { id: 89, category: "情緒與內心", text: "你會因為他跟別人互動而生悶氣嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 90, category: "情緒與內心", text: "你會把他的照片設成手機桌布或聊天背景嗎？", options: ["不會", "考慮過", "已經設了"], scores: [0, 1, 2] },
    { id: 91, category: "情緒與內心", text: "你會因為他而覺得自己很幸運嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 92, category: "情緒與內心", text: "你會害怕他對別人比對你好嗎？", options: ["不會", "有點害怕", "非常害怕"], scores: [0, 1, 2] },
    { id: 93, category: "情緒與內心", text: "你會因為他隨便一句話而想很多嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 94, category: "情緒與內心", text: "你會因為他的態度而失眠嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 95, category: "情緒與內心", text: "你會覺得自己對他的感情是「無法控制」的嗎？", options: ["不會", "有點這樣覺得", "強烈這樣覺得"], scores: [0, 1, 2] },
    { id: 96, category: "情緒與內心", text: "他對你笑一下你會開心一整天嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 97, category: "情緒與內心", text: "你會因為他而覺得自己變漂亮或變帥了嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 98, category: "情緒與內心", text: "你會因為他的存在而覺得世界變美好了嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 99, category: "情緒與內心", text: "你會因為他的批評或冷淡而完全崩潰嗎？", options: ["不會", "稍微難過", "完全崩潰"], scores: [0, 1, 2] },
    { id: 100, category: "情緒與內心", text: "你會幻想跟他一起做情侶會做的事嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 101, category: "情緒與內心", text: "你會因為他而對其他異性完全沒興趣嗎？", options: ["不會", "稍微沒興趣", "完全沒興趣"], scores: [0, 1, 2] },
    { id: 102, category: "情緒與內心", text: "你會因為他的訊息而心跳加速到手抖嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 103, category: "情緒與內心", text: "你會覺得他是世界上最棒的人嗎？", options: ["不會", "有點這麼覺得", "強烈這麼覺得"], scores: [0, 1, 2] },
    { id: 104, category: "情緒與內心", text: "你會因為他而對未來充滿期待嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 105, category: "情緒與內心", text: "你會因為他而害怕失去嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 106, category: "情緒與內心", text: "你會因為他的一個眼神或動作而想很多嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 107, category: "情緒與內心", text: "你會覺得他對你來說是「獨一無二」的嗎？", options: ["不會", "有點這麼覺得", "強烈這麼覺得"], scores: [0, 1, 2] },
    { id: 108, category: "情緒與內心", text: "你會因為他而覺得自己很幸福嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 109, category: "情緒與內心", text: "你會因為他而覺得自己很可悲嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 110, category: "情緒與內心", text: "你會因為他而開始相信命運或緣分嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 111, category: "情緒與內心", text: "你會因為他的存在而覺得自己不再孤單嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 112, category: "情緒與內心", text: "你會因為他而對未來充滿不安或焦慮嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 113, category: "情緒與內心", text: "你會因為他而覺得自己活著很有意義嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 114, category: "情緒與內心", text: "你會因為他而覺得自己很可笑嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 115, category: "情緒與內心", text: "你會因為他而開始思考「什麼是愛」？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 116, category: "情緒與內心", text: "你會因為他而對人性產生懷疑嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 117, category: "情緒與內心", text: "你會因為他而覺得自己很勇敢嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 118, category: "情緒與內心", text: "你會因為他而覺得自己很愚蠢嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 119, category: "情緒與內心", text: "你會因為他而開始寫詩或創作嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 120, category: "情緒與內心", text: "你會因為他而感覺到前所未有的快樂嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },

    // ===== 付出與投入（第121-180題） =====
    { id: 121, category: "付出與投入", text: "你傳訊息的頻率比他高嗎？", options: ["差不多或更低", "稍微高一些", "明顯高出很多"], scores: [0, 1, 2] },
    { id: 122, category: "付出與投入", text: "你會主動找話題延續對話嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 123, category: "付出與投入", text: "你會為了他準備小禮物或驚喜嗎？", options: ["不會", "想過但沒做", "已經做了"], scores: [0, 1, 2] },
    { id: 124, category: "付出與投入", text: "你會為了他改變自己的打扮或風格嗎？", options: ["不會", "稍微調整", "大幅改變"], scores: [0, 1, 2] },
    { id: 125, category: "付出與投入", text: "你會為了他學習新技能（煮飯或打電動等）嗎？", options: ["不會", "考慮過", "正在學或學了"], scores: [0, 1, 2] },
    { id: 126, category: "付出與投入", text: "你會拒絕其他異性的邀約因為心裡有他？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 127, category: "付出與投入", text: "你會默默幫他做事情（整理筆記或買東西等）？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 128, category: "付出與投入", text: "你會為了配合他而調整自己的作息時間嗎？", options: ["不會", "稍微調整", "大幅調整"], scores: [0, 1, 2] },
    { id: 129, category: "付出與投入", text: "你會請朋友幫忙打聽他的事情嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 130, category: "付出與投入", text: "你會把他的喜好記得比自己的還清楚嗎？", options: ["不會", "差不多", "他的我更清楚"], scores: [0, 1, 2] },
    { id: 131, category: "付出與投入", text: "你會為了他而花錢（買禮物或請客或跟行程）？", options: ["不會", "偶爾花一點", "花了不少錢"], scores: [0, 1, 2] },
    { id: 132, category: "付出與投入", text: "你會把他的事情擺在自己的事情前面嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 133, category: "付出與投入", text: "你會為了跟他多相處而推掉其他聚會嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 134, category: "付出與投入", text: "你會不會幫他找藉口（他太忙或沒看到訊息等）？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 135, category: "付出與投入", text: "你會把他對你做過的好事記得非常清楚嗎？", options: ["不會", "記得一些", "每一件都記得"], scores: [0, 1, 2] },
    { id: 136, category: "付出與投入", text: "你會為了他而熬夜陪他聊天或等訊息嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 137, category: "付出與投入", text: "你會因為他喜歡某個東西而跟著喜歡嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 138, category: "付出與投入", text: "你會為了他的生日而提前很久準備嗎？", options: ["不會", "提前一週", "提前一個月以上"], scores: [0, 1, 2] },
    { id: 139, category: "付出與投入", text: "你會幫他處理他遇到的問題或困難嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 140, category: "付出與投入", text: "你會因為他而改變自己原本的興趣或嗜好嗎？", options: ["不會", "稍微調整", "大幅改變"], scores: [0, 1, 2] },
    { id: 141, category: "付出與投入", text: "你會把自己的時間優先留給他嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 142, category: "付出與投入", text: "你會為了跟他見面而特別打扮嗎？", options: ["不會", "稍微打扮", "精心打扮"], scores: [0, 1, 2] },
    { id: 143, category: "付出與投入", text: "你會記住他無意間說過的小事並默默執行嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 144, category: "付出與投入", text: "你會因為他而放棄自己原本的計畫嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 145, category: "付出與投入", text: "你會幫他跑腿或處理雜事嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 146, category: "付出與投入", text: "你會為了他而忍受不舒服或委屈嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 147, category: "付出與投入", text: "你會把他的需求看得比自己重要嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 148, category: "付出與投入", text: "你會因為他而跟朋友減少往來嗎？", options: ["不會", "稍微減少", "明顯減少"], scores: [0, 1, 2] },
    { id: 149, category: "付出與投入", text: "你會主動問他需不需要幫忙嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 150, category: "付出與投入", text: "你會把最好的東西留給他嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 151, category: "付出與投入", text: "你會為了他而熬夜做卡片或禮物嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 152, category: "付出與投入", text: "你會為了他而學習他喜歡的語言或文化嗎？", options: ["不會", "考慮過", "已經在學了"], scores: [0, 1, 2] },
    { id: 153, category: "付出與投入", text: "你會為了他而改變自己的飲食習慣嗎？", options: ["不會", "稍微改變", "大幅改變"], scores: [0, 1, 2] },
    { id: 154, category: "付出與投入", text: "你會為了他而開始運動或健身嗎？", options: ["不會", "考慮過", "已經在做了"], scores: [0, 1, 2] },
    { id: 155, category: "付出與投入", text: "你會為了他而整理自己的生活環境嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 156, category: "付出與投入", text: "你會為了他而放棄自己的休閒娛樂嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 157, category: "付出與投入", text: "你會為了他而忍受你不喜歡的人事物嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 158, category: "付出與投入", text: "你會為了他而把自己的東西借給他或送給他嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 159, category: "付出與投入", text: "你會為了他而改變自己的未來規劃嗎？", options: ["不會", "考慮過", "已經改變了"], scores: [0, 1, 2] },
    { id: 160, category: "付出與投入", text: "你會為了他而影響自己的財務狀況嗎？", options: ["不會", "稍微影響", "明顯影響"], scores: [0, 1, 2] },
    { id: 161, category: "付出與投入", text: "你會為了他而跟家人產生衝突嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 162, category: "付出與投入", text: "你會為了他而隱藏自己的真實感受嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 163, category: "付出與投入", text: "你會為了他而勉強自己做不喜歡的事嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 164, category: "付出與投入", text: "你會為了他而放棄出國或外派的機會嗎？", options: ["不會", "考慮過", "已經放棄了"], scores: [0, 1, 2] },
    { id: 165, category: "付出與投入", text: "你會為了他而把自己的秘密告訴他嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 166, category: "付出與投入", text: "你會為了他而放棄和朋友聚會的機會嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 167, category: "付出與投入", text: "你會為了他而忍受等待（遲到或已讀）嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 168, category: "付出與投入", text: "你會為了他而把自己的事情放一邊嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 169, category: "付出與投入", text: "你會為了他而勉強自己配合他的興趣嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 170, category: "付出與投入", text: "你會為了他而忘記照顧自己嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 171, category: "付出與投入", text: "你會為了他而委屈自己的原則或底線嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 172, category: "付出與投入", text: "你會為了他而隱藏自己的情緒裝作沒事嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 173, category: "付出與投入", text: "你會為了他而主動承擔他的責任或壓力嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 174, category: "付出與投入", text: "你會為了他而放棄自己的夢想或目標嗎？", options: ["不會", "考慮過", "已經放棄了"], scores: [0, 1, 2] },
    { id: 175, category: "付出與投入", text: "你會為了他而改變自己的居住地或工作地點嗎？", options: ["不會", "考慮過", "已經改變了"], scores: [0, 1, 2] },
    { id: 176, category: "付出與投入", text: "你會因為他而開始保養或健身嗎？", options: ["不會", "考慮過", "已經開始了"], scores: [0, 1, 2] },
    { id: 177, category: "付出與投入", text: "你會因為他而放棄自己的飲食控制嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 178, category: "付出與投入", text: "你會因為他而把自己的祕密基地分享給他嗎？", options: ["不會", "考慮過", "已經分享了"], scores: [0, 1, 2] },
    { id: 179, category: "付出與投入", text: "你會因為他而改變自己的衣櫃風格嗎？", options: ["不會", "稍微改變", "大幅改變"], scores: [0, 1, 2] },
    { id: 180, category: "付出與投入", text: "你會因為他而開始存錢為了跟他一起旅行嗎？", options: ["不會", "考慮過", "已經開始存了"], scores: [0, 1, 2] },

    // ===== 理性判斷（第181-240題） =====
    { id: 181, category: "理性判斷", text: "你覺得你們之間有明確的曖昧訊號嗎？", options: ["沒有", "不太確定", "我覺得有"], scores: [0, 1, 2] },
    { id: 182, category: "理性判斷", text: "你覺得他對你的態度跟對其他人有明顯不同嗎？", options: ["沒有不同", "稍微不同", "明顯不同"], scores: [0, 1, 2] },
    { id: 183, category: "理性判斷", text: "你覺得自己對他的喜歡是理性的還是感性的？", options: ["理性的", "各半", "完全感性的"], scores: [0, 1, 2] },
    { id: 184, category: "理性判斷", text: "你們有單獨出去過嗎？", options: ["沒有", "一次", "兩次以上"], scores: [0, 1, 2] },
    { id: 185, category: "理性判斷", text: "你們有過肢體接觸（碰肩或摟腰或牽手等）嗎？", options: ["沒有", "有過輕微的", "有過親密的"], scores: [0, 1, 2] },
    { id: 186, category: "理性判斷", text: "你覺得他知道你對他有好感嗎？", options: ["不知道", "可能知道", "他應該知道"], scores: [0, 1, 2] },
    { id: 187, category: "理性判斷", text: "你們聊天的內容會涉及私人或深入的話題嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 188, category: "理性判斷", text: "你們有聊過感情相關的話題嗎？", options: ["沒有", "稍微提過", "深入聊過"], scores: [0, 1, 2] },
    { id: 189, category: "理性判斷", text: "你覺得他對你也有好感嗎？", options: ["沒有", "不太確定", "我覺得有"], scores: [0, 1, 2] },
    { id: 190, category: "理性判斷", text: "朋友們都怎麼看待你們的關係？", options: ["普通朋友", "不太確定", "覺得你們有戲"], scores: [0, 1, 2] },
    { id: 191, category: "理性判斷", text: "你會因為別人的意見而影響對他的感覺嗎？", options: ["不會", "稍微會", "很容易受影響"], scores: [0, 1, 2] },
    { id: 192, category: "理性判斷", text: "你能列出三個他不適合你的理由嗎？", options: ["可以", "勉強可以", "列不出來"], scores: [0, 1, 2] },
    { id: 193, category: "理性判斷", text: "你覺得你們的價值觀和生活方式有差異嗎？", options: ["有我知道", "不確定", "我覺得很合"], scores: [0, 1, 2] },
    { id: 194, category: "理性判斷", text: "你覺得他對你的訊息回覆速度正常嗎？", options: ["正常", "有點慢但理解", "太慢了但我不介意"], scores: [0, 1, 2] },
    { id: 195, category: "理性判斷", text: "你覺得你們現在的關係尷尬嗎？", options: ["不會", "有時候有點", "很尷尬但我繼續"], scores: [0, 1, 2] },
    { id: 196, category: "理性判斷", text: "他主動約過你嗎？", options: ["沒有", "一次", "兩次以上"], scores: [0, 1, 2] },
    { id: 197, category: "理性判斷", text: "他有送過你禮物或請過你嗎？", options: ["沒有", "一次", "兩次以上"], scores: [0, 1, 2] },
    { id: 198, category: "理性判斷", text: "他有對你說過曖昧或暗示的話嗎？", options: ["沒有", "不確定算不算", "有明確說過"], scores: [0, 1, 2] },
    { id: 199, category: "理性判斷", text: "他有把你介紹給他的朋友或家人認識嗎？", options: ["沒有", "介紹過朋友", "介紹過家人"], scores: [0, 1, 2] },
    { id: 200, category: "理性判斷", text: "他會主動關心你的生活或心情嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 201, category: "理性判斷", text: "他會記得你說過的重要事情嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 202, category: "理性判斷", text: "他會主動找你聊天或約你出去嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 203, category: "理性判斷", text: "你們的對話內容會越來越深入嗎？", options: ["沒有明顯變化", "有一點", "越來越深入"], scores: [0, 1, 2] },
    { id: 204, category: "理性判斷", text: "他會在你需要幫助的時候出現嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 205, category: "理性判斷", text: "他會對你分享他的私人生活或心事嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 206, category: "理性判斷", text: "他會因為你的情緒而關心你嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 207, category: "理性判斷", text: "他會主動跟你報備行程嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 208, category: "理性判斷", text: "他會在社群上跟你互動（按讚或留言）嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 209, category: "理性判斷", text: "他會叫你起床或說晚安嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 210, category: "理性判斷", text: "他會記得你的生日或重要日子嗎？", options: ["不會", "大概記得", "一定會記得"], scores: [0, 1, 2] },
    { id: 211, category: "理性判斷", text: "你會客觀評估你們之間的條件是否匹配嗎？", options: ["會", "不太確定", "不會（我暈了）"], scores: [0, 1, 2] },
    { id: 212, category: "理性判斷", text: "你覺得他對你的好感程度跟你的付出成正比嗎？", options: ["不成比例我付出太多", "不太確定", "我覺得成正比"], scores: [0, 1, 2] },
    { id: 213, category: "理性判斷", text: "你會因為朋友的勸告而稍微清醒一點嗎？", options: ["會馬上清醒", "會想一想但繼續暈", "完全聽不進去"], scores: [0, 1, 2] },
    { id: 214, category: "理性判斷", text: "你覺得你們之間的互動是「你追他跑」的模式嗎？", options: ["不是", "有點像", "完全就是"], scores: [0, 1, 2] },
    { id: 215, category: "理性判斷", text: "你覺得自己在這段關係中有尊嚴嗎？", options: ["有", "不太確定", "沒有"], scores: [0, 1, 2] },
    { id: 216, category: "理性判斷", text: "你覺得如果他真的喜歡你會讓你這麼痛苦嗎？", options: ["不會", "不確定", "我覺得有可能"], scores: [0, 1, 2] },
    { id: 217, category: "理性判斷", text: "你會因為他而忽略其他追求者或機會嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 218, category: "理性判斷", text: "你覺得你們的關係有明確進展嗎？", options: ["有在進步", "原地踏步", "沒有進展但我沒差"], scores: [0, 1, 2] },
    { id: 219, category: "理性判斷", text: "你會因為害怕失去而不敢表達真實感受嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 220, category: "理性判斷", text: "你會客觀承認他有缺點嗎？", options: ["會很清楚", "勉強承認", "我選擇忽略"], scores: [0, 1, 2] },
    { id: 221, category: "理性判斷", text: "你覺得你們未來在一起的機率有多高？", options: ["很高", "不太確定", "其實不高但我還是暈"], scores: [0, 1, 2] },
    { id: 222, category: "理性判斷", text: "你會用「順其自然」來安慰自己嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 223, category: "理性判斷", text: "你覺得自己的付出有被看見或珍惜嗎？", options: ["有", "不太確定", "沒有但我不在意"], scores: [0, 1, 2] },
    { id: 224, category: "理性判斷", text: "你會不會覺得自己一直在「等」他做什麼？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 225, category: "理性判斷", text: "你覺得這段關係對你來說是「健康」的嗎？", options: ["健康的", "不太確定", "不太健康但我還是繼續"], scores: [0, 1, 2] },
    { id: 226, category: "理性判斷", text: "你會客觀判斷他對你的態度是朋友還是情人嗎？", options: ["會很清楚", "不太確定", "我覺得是情人"], scores: [0, 1, 2] },
    { id: 227, category: "理性判斷", text: "你會因為他而降低自己的標準嗎？", options: ["不會", "稍微降低", "大幅降低"], scores: [0, 1, 2] },
    { id: 228, category: "理性判斷", text: "你會因為他而忽略自己直覺的警訊嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 229, category: "理性判斷", text: "你會覺得自己在這段關係中「醒不來」嗎？", options: ["不會", "有點感覺", "強烈這麼覺得"], scores: [0, 1, 2] },
    { id: 230, category: "理性判斷", text: "你會用「至少我有喜歡的人」來安慰自己嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 231, category: "理性判斷", text: "你會因為他而對愛情產生新的看法嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 232, category: "理性判斷", text: "你會覺得自己付出的比他多很多嗎？", options: ["不會", "差不多", "我付出多很多"], scores: [0, 1, 2] },
    { id: 233, category: "理性判斷", text: "你會因為他而開始懷疑愛情嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 234, category: "理性判斷", text: "你會覺得自己「沒救了」嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 235, category: "理性判斷", text: "你會因為他而對自己失去信心嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 236, category: "理性判斷", text: "你覺得你們的關係有未來嗎？", options: ["有", "不太確定", "其實沒有但我還是繼續"], scores: [0, 1, 2] },
    { id: 237, category: "理性判斷", text: "你會因為他而影響自己的職業選擇嗎？", options: ["不會", "考慮過", "已經改變了"], scores: [0, 1, 2] },
    { id: 238, category: "理性判斷", text: "你會因為他而開始學習跟他有關的專業知識嗎？", options: ["不會", "考慮過", "已經開始了"], scores: [0, 1, 2] },
    { id: 239, category: "理性判斷", text: "你會因為他而把自己的行程公開讓他看到嗎？", options: ["不會", "想過但沒做", "已經公開了"], scores: [0, 1, 2] },
    { id: 240, category: "理性判斷", text: "你會因為他而主動承擔更多責任嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },

    // ===== 暈船症狀（第241-300題） =====
    { id: 241, category: "暈船症狀", text: "你會無法控制地去想他嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 242, category: "暈船症狀", text: "你有沒有因為他而影響到工作或課業表現？", options: ["沒有", "稍微影響", "明顯影響"], scores: [0, 1, 2] },
    { id: 243, category: "暈船症狀", text: "你有沒有因為他而失眠過？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 244, category: "暈船症狀", text: "你有沒有因為他而食慾不振？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 245, category: "暈船症狀", text: "你有沒有想過「如果他交女朋友了我怎麼辦」？", options: ["沒有", "偶爾想過", "常常在想"], scores: [0, 1, 2] },
    { id: 246, category: "暈船症狀", text: "你有沒有在朋友面前提起他的名字超過三次以上？", options: ["沒有", "一次聚會提三次", "超過三次"], scores: [0, 1, 2] },
    { id: 247, category: "暈船症狀", text: "你會不會用其他異性來測試他的反應？", options: ["不會", "想過但沒做", "做過了"], scores: [0, 1, 2] },
    { id: 248, category: "暈船症狀", text: "你會不會覺得自己現在「陷進去」了？", options: ["不會", "有一點", "完全陷進去了"], scores: [0, 1, 2] },
    { id: 249, category: "暈船症狀", text: "你會不會希望他能主動一點？", options: ["不會", "有點希望", "非常希望"], scores: [0, 1, 2] },
    { id: 250, category: "暈船症狀", text: "整體來說你現在因他而起的快樂程度如何？", options: ["普通", "還算快樂", "極度快樂或極度痛苦"], scores: [0, 1, 2] },
    { id: 251, category: "暈船症狀", text: "你有沒有因為他而哭過或崩潰過？", options: ["沒有", "一次", "兩次以上"], scores: [0, 1, 2] },
    { id: 252, category: "暈船症狀", text: "你有沒有因為他而跟朋友吵過架？", options: ["沒有", "一次", "兩次以上"], scores: [0, 1, 2] },
    { id: 253, category: "暈船症狀", text: "你有沒有為了他而說謊或隱瞞事情？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 254, category: "暈船症狀", text: "你有沒有因為他而忽略自己的身體健康？", options: ["沒有", "稍微忽略", "明顯忽略"], scores: [0, 1, 2] },
    { id: 255, category: "暈船症狀", text: "你有沒有覺得自己「沒有他不行」？", options: ["沒有", "偶爾這樣想", "常常這樣想"], scores: [0, 1, 2] },
    { id: 256, category: "暈船症狀", text: "你有沒有因為他而做出讓自己後悔的事？", options: ["沒有", "一次", "兩次以上"], scores: [0, 1, 2] },
    { id: 257, category: "暈船症狀", text: "你有沒有因為他而懷疑自己的價值？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 258, category: "暈船症狀", text: "你有沒有因為他而對其他事物失去興趣？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 259, category: "暈船症狀", text: "你有沒有因為他而變得很情緒化？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 260, category: "暈船症狀", text: "你有沒有覺得自己「生病了」？", options: ["沒有", "有一點感覺", "強烈覺得是"], scores: [0, 1, 2] },
    { id: 261, category: "暈船症狀", text: "你有沒有因為他而產生「患得患失」的感覺？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 262, category: "暈船症狀", text: "你有沒有因為他而變得不像自己？", options: ["沒有", "稍微有", "完全變了一個人"], scores: [0, 1, 2] },
    { id: 263, category: "暈船症狀", text: "你有沒有因為他而開始討厭自己？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 264, category: "暈船症狀", text: "你有沒有因為他而對人生感到迷茫？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 265, category: "暈船症狀", text: "你有沒有因為他而產生「我不配」的想法？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 266, category: "暈船症狀", text: "你有沒有因為他而失去對其他事物的熱情？", options: ["沒有", "稍微失去", "完全失去"], scores: [0, 1, 2] },
    { id: 267, category: "暈船症狀", text: "你有沒有因為他而覺得時間過得很慢？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 268, category: "暈船症狀", text: "你有沒有因為他而開始抽煙或喝酒？", options: ["沒有", "偶爾會", "已經養成習慣了"], scores: [0, 1, 2] },
    { id: 269, category: "暈船症狀", text: "你有沒有因為他而暴飲暴食或完全不吃？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 270, category: "暈船症狀", text: "你有沒有因為他而影響到自己的睡眠品質？", options: ["沒有", "稍微影響", "嚴重影響"], scores: [0, 1, 2] },
    { id: 271, category: "暈船症狀", text: "你會不會因為他而產生「為什麼他不喜歡我」的痛苦？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 272, category: "暈船症狀", text: "你有沒有因為他而覺得時間過得很漫長？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 273, category: "暈船症狀", text: "你有沒有因為他而失去生活重心？", options: ["沒有", "稍微失去", "完全失去"], scores: [0, 1, 2] },
    { id: 274, category: "暈船症狀", text: "你有沒有因為他而對自己產生厭惡感？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 275, category: "暈船症狀", text: "你有沒有因為他而覺得世界不公平？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 276, category: "暈船症狀", text: "你有沒有因為他而變得越來越沒有耐心？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 277, category: "暈船症狀", text: "你有沒有因為他而影響到與家人的關係？", options: ["沒有", "稍微影響", "明顯影響"], scores: [0, 1, 2] },
    { id: 278, category: "暈船症狀", text: "你有沒有因為他而做出不理性的決定？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 279, category: "暈船症狀", text: "你有沒有因為他而失去對自己的掌握感？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 280, category: "暈船症狀", text: "你有沒有因為他而覺得自己越來越不像自己？", options: ["沒有", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 281, category: "暈船症狀", text: "你會因為他而覺得自己是全世界最幸福的人嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 282, category: "暈船症狀", text: "你會因為他而覺得自己是全世界最倒楣的人嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 283, category: "暈船症狀", text: "你會因為他而對人生充滿矛盾嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 284, category: "暈船症狀", text: "你會因為他而開始思考人生的意義嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 285, category: "暈船症狀", text: "你會因為他而覺得自己變得脆弱了嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 286, category: "暈船症狀", text: "你會因為他而覺得自己變得更成熟了嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 287, category: "暈船症狀", text: "你會因為他而覺得自己變得更焦慮了嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 288, category: "暈船症狀", text: "你會因為他而覺得自己變得更勇敢了嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 289, category: "暈船症狀", text: "你會因為他而覺得自己變得更容易嫉妒了嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 290, category: "暈船症狀", text: "你會因為他而覺得自己變得更會包容了嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 291, category: "暈船症狀", text: "你會因為他而開始寫日記或紀錄心情嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 292, category: "暈船症狀", text: "你會因為他而對自己產生新的認識嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 293, category: "暈船症狀", text: "你會因為他而變得更懂得珍惜自己嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 294, category: "暈船症狀", text: "你會因為他而變得更懂得愛自己嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 295, category: "暈船症狀", text: "你會因為他而重新審視自己的價值嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 296, category: "暈船症狀", text: "你會因為他而覺得自己成長了嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 297, category: "暈船症狀", text: "你會因為他而開始運動或培養新興趣嗎？", options: ["不會", "考慮過", "已經開始了"], scores: [0, 1, 2] },
    { id: 298, category: "暈船症狀", text: "你會因為他而更了解自己想要什麼嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 299, category: "暈船症狀", text: "你會因為他而變得更有勇氣面對自己嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] },
    { id: 300, category: "暈船症狀", text: "你會因為他而把「他」寫進自己未來的藍圖裡嗎？", options: ["不會", "偶爾會", "常常會"], scores: [0, 1, 2] }
];


// ===== 2. 工具函數 =====

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getRandomQuestions(bank, count = 15) {
    const shuffled = shuffleArray(bank);
    return shuffled.slice(0, count);
}

function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateId() {
    return 'obj_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
}

function formatDate(isoString) {
    const d = new Date(isoString);
    return d.getFullYear() + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + String(d.getDate()).padStart(2, '0');
}

function formatDateTime(isoString) {
    const d = new Date(isoString);
    return formatDate(isoString) + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}

function daysSince(startDate, endDate) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diff = end - start;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}


// ===== 3. 數據管理 (localStorage) =====

function loadObjects() {
    const data = localStorage.getItem('dizzy_objects');
    return data ? JSON.parse(data) : [];
}

function saveObjects(objects) {
    localStorage.setItem('dizzy_objects', JSON.stringify(objects));
}

function getObject(id) {
    const objects = loadObjects();
    return objects.find(o => o.id === id);
}

function updateObject(id, updatedData) {
    const objects = loadObjects();
    const index = objects.findIndex(o => o.id === id);
    if (index !== -1) {
        objects[index] = { ...objects[index], ...updatedData };
        saveObjects(objects);
        return objects[index];
    }
    return null;
}

function deleteObject(id) {
    let objects = loadObjects();
    objects = objects.filter(o => o.id !== id);
    saveObjects(objects);
}


// ===== 4. 趨勢 Alert 調侃語 =====

const TREND_ALERTS = {
    worse: [
        "😏 恭喜，你正在往海底沉淪。",
        "😅 越暈越勇，你是想破紀錄是不是？",
        "🤣 你上輩子是秤砣嗎？這麼會沉。",
        "😂 指數上升中，你的理智正在離家出走。",
        "😜 朋友，你忘了上次是怎麼醒的嗎？",
        "🥴 暈船仔，該不會對方根本不知道你在暈吧？"
    ],
    better: [
        "🫡 喔？有人在游回岸邊了喔。",
        "🤣 海水退潮，發現自己沒穿褲子。",
        "😎 清醒進度條正在跑，請稍候。",
        "🙄 你終於發現他只是個普通人了？",
        "🧊 降溫中，需要幫你叫杯冰水嗎？",
        "👏 不錯嘛，今天有記得穿褲子出門。"
    ],
    same: [
        "🫠 不動如山，你是在原地踏步還是在紮營？",
        "😴 卡住了，跟他的對話紀錄一樣。",
        "🤔 沒有進步也沒有退步，這就是暈船的停滯期。",
        "🧘 你現在是暈船界的吉祥物，穩定輸出中。"
    ]
};

function getTrendAlert(currentScore, previousScore) {
    if (previousScore === null || previousScore === undefined) return null;
    if (currentScore > previousScore) return randomPick(TREND_ALERTS.worse);
    if (currentScore < previousScore) return randomPick(TREND_ALERTS.better);
    return randomPick(TREND_ALERTS.same);
}


// ===== 5. 結案調侃語 =====

const CLOSE_MESSAGES = [
    "🎉 恭喜你脫離暈船苦海，下次不要再跳下去了。",
    "🎊 結案！你自由了——直到下一次暈船為止。",
    "🤝 恭喜清醒。記得存檔，下次暈的時候回來看。",
    "📦 本案已結。你省下來的時間可以看三部電影。",
    "😏 清醒了？好，那我們來聊聊你下一個暈的對象是誰。",
    "⚖️ 恭喜結案。他沒有你，你沒有他，扯平了。",
    "💪 你又贏了一次自己。雖然贏得很狼狽，但還是贏了。",
    "🤡 結案。希望你下次暈之前，先記得這次有多蠢。",
    "👉 好的，下一位。",
    "🤗 醒來的感覺怎麼樣？是不是覺得自己之前很瞎？"
];


// ===== 6. 顯示 Alert =====

function showAlert(text) {
    const box = document.getElementById('alert-box');
    const textEl = document.getElementById('alert-text');
    textEl.textContent = text;
    box.classList.remove('hidden');
}

document.getElementById('alert-close').addEventListener('click', function() {
    document.getElementById('alert-box').classList.add('hidden');
});


// ===== 7. 頁面切換 =====

function showPage(pageId) {
    document.querySelectorAll('#page-list, #page-detail, #page-quiz').forEach(el => {
        el.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
    document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
}


// ===== 8. 總覽頁面 =====

function renderList() {
    const objects = loadObjects();
    const container = document.getElementById('object-list');
    const stats = document.getElementById('stats');

    const openCount = objects.filter(o => o.status === 'open').length;
    const closedCount = objects.filter(o => o.status === 'closed').length;
    stats.textContent = `總案件：${objects.length} ｜ 暈船中：${openCount} ｜ 已結案：${closedCount}`;

    if (objects.length === 0) {
        container.innerHTML = `<div style="text-align:center;color:#b8ab9e;padding:40px 0;">還沒有暈船對象，<br>新增一個來玩玩吧 🚢</div>`;
        return;
    }

    const sorted = [...objects].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    container.innerHTML = sorted.map(obj => {
        const lastScore = obj.records && obj.records.length > 0 ? obj.records[obj.records.length - 1].score : '--';
        const days = obj.status === 'closed' ?
            daysSince(obj.createdAt, obj.closedAt) :
            daysSince(obj.createdAt);
        const statusLabel = obj.status === 'open' ? '🟡 暈船中' : '🟢 已結案';
        const badgeClass = obj.status === 'open' ? 'open' : 'closed';

        return `
            <div class="object-card" data-id="${obj.id}">
                <div class="info">
                    <div class="name">${obj.name}</div>
                    <div class="meta">暈了 ${days} 天 ｜ ${formatDate(obj.createdAt)}</div>
                </div>
                <div class="right">
                    <span class="last-score">${lastScore}</span>
                    <span class="badge ${badgeClass}">${statusLabel}</span>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.object-card').forEach(card => {
        card.addEventListener('click', function() {
            const id = this.dataset.id;
            renderDetail(id);
            showPage('page-detail');
        });
    });
}


// ===== 9. 新增對象 =====

document.getElementById('btn-add-object').addEventListener('click', function() {
    document.getElementById('modal-add').classList.remove('hidden');
    document.getElementById('input-name').value = '';
    document.getElementById('input-desc').value = '';
    document.getElementById('input-met').value = '';
    document.getElementById('input-name').focus();
});

document.getElementById('btn-modal-cancel').addEventListener('click', function() {
    document.getElementById('modal-add').classList.add('hidden');
});

document.getElementById('btn-modal-confirm').addEventListener('click', function() {
    const name = document.getElementById('input-name').value.trim();
    if (!name) {
        showAlert('⚠️ 至少幫他取個代號吧！');
        return;
    }
    const desc = document.getElementById('input-desc').value.trim();
    const met = document.getElementById('input-met').value;

    const newObj = {
        id: generateId(),
        name: name,
        description: desc || '',
        metAt: met || '',
        status: 'open',
        createdAt: new Date().toISOString(),
        closedAt: null,
        closeReason: '',
        records: [],
        wakeEvents: []
    };

    const objects = loadObjects();
    objects.push(newObj);
    saveObjects(objects);
    document.getElementById('modal-add').classList.add('hidden');
    renderList();
    showAlert(`✅ 已建立「${name}」的暈船檔案！`);
});

document.getElementById('input-name').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') document.getElementById('btn-modal-confirm').click();
});


// ===== 10. 詳細頁面 =====

let currentDetailId = null;
let chartInstance = null;

document.getElementById('btn-back').addEventListener('click', function() {
    showPage('page-list');
    renderList();
});

function renderDetail(id) {
    const obj = getObject(id);
    if (!obj) {
        showAlert('⚠️ 找不到這個對象');
        showPage('page-list');
        renderList();
        return;
    }

    currentDetailId = id;
    const container = document.getElementById('detail-content');

    const isOpen = obj.status === 'open';
    const days = isOpen ? daysSince(obj.createdAt) : daysSince(obj.createdAt, obj.closedAt);
    const lastScore = obj.records && obj.records.length > 0 ? obj.records[obj.records.length - 1].score : '還沒有記錄';

    let html = `
        <div class="detail-header">
            <span class="detail-name">${obj.name}</span>
            <span class="detail-status ${isOpen ? 'badge open' : 'badge closed'}">${isOpen ? '🟡 暈船中' : '🟢 已結案'}</span>
        </div>
        <div class="detail-meta">
            ${obj.description ? '📝 ' + obj.description + ' ｜ ' : ''}
            ${obj.metAt ? '📅 認識：' + obj.metAt + ' ｜ ' : ''}
            ${isOpen ? '⏳ 已暈 ' + days + ' 天' : '⏳ 總共暈了 ' + days + ' 天'}
            ${!isOpen && obj.closedAt ? ' ｜ 結案：' + formatDate(obj.closedAt) : ''}
        </div>
    `;

    if (!isOpen && obj.closeReason) {
        html += `<div class="close-reason">📌 結案原因：${obj.closeReason}</div>`;
    }

    if (isOpen) {
        html += `
            <div class="detail-actions">
                <button class="primary" id="btn-do-quiz">📊 做測驗</button>
                <button class="secondary" id="btn-add-wake">✍️ 記錄清醒事件</button>
                <button class="danger" id="btn-close-case">🔒 結案</button>
            </div>
        `;
    } else {
        html += `
            <div class="detail-actions">
                <button class="secondary" id="btn-reopen">🔄 重新打開</button>
                <button class="danger" id="btn-delete">🗑️ 刪除檔案</button>
            </div>
        `;
    }

    html += `<div class="detail-section"><h3>📈 暈船指數趨勢</h3>`;
    if (obj.records && obj.records.length > 0) {
        html += `<div class="chart-container"><canvas id="score-chart"></canvas></div>`;
        html += `<div style="font-size:13px;color:#9e8e7e;text-align:center;">最後記錄：${obj.records[obj.records.length - 1].score} 分 ｜ 共 ${obj.records.length} 次記錄</div>`;
    } else {
        html += `<div class="no-data">還沒有測驗記錄，做一次測驗看看吧 🧐</div>`;
    }
    html += `</div>`;

    html += `<div class="detail-section"><h3>💡 清醒事件</h3>`;
    if (obj.wakeEvents && obj.wakeEvents.length > 0) {
        const sorted = [...obj.wakeEvents].sort((a, b) => new Date(b.date) - new Date(a.date));
        html += sorted.map(w => `
            <div class="wake-item">
                <span class="wake-date">${formatDateTime(w.date)}</span>
                ${w.content}
            </div>
        `).join('');
    } else {
        html += `<div class="no-data">還沒有清醒事件，你還在水裡載浮載沉 😂</div>`;
    }
    html += `</div>`;

    container.innerHTML = html;

    if (obj.records && obj.records.length > 0) {
        const ctx = document.getElementById('score-chart');
        if (ctx) {
            if (chartInstance) {
                chartInstance.destroy();
                chartInstance = null;
            }
            const labels = obj.records.map(r => formatDate(r.date));
            const data = obj.records.map(r => r.score);

            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '暈船指數',
                        data: data,
                        borderColor: '#c48a7a',
                        backgroundColor: 'rgba(196, 138, 122, 0.1)',
                        tension: 0.3,
                        fill: true,
                        pointBackgroundColor: '#c48a7a',
                        pointRadius: 5,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: {
                            min: 0,
                            max: 100,
                            ticks: { stepSize: 20 }
                        }
                    }
                }
            });
        }
    }

    document.getElementById('btn-do-quiz')?.addEventListener('click', function() {
        startQuiz(id);
    });

    document.getElementById('btn-add-wake')?.addEventListener('click', function() {
        document.getElementById('modal-wake').classList.remove('hidden');
        document.getElementById('input-wake').value = '';
        document.getElementById('input-wake').focus();
    });

    document.getElementById('btn-close-case')?.addEventListener('click', function() {
        document.getElementById('modal-close').classList.remove('hidden');
        document.getElementById('input-close-reason').value = '';
        document.getElementById('input-close-reason').focus();
    });

    document.getElementById('btn-reopen')?.addEventListener('click', function() {
        if (confirm('確定要重新打開這個案件嗎？')) {
            updateObject(id, { status: 'open', closedAt: null });
            renderDetail(id);
            renderList();
            showAlert('🔄 已重新打開，繼續暈吧（笑）');
        }
    });

    document.getElementById('btn-delete')?.addEventListener('click', function() {
        if (confirm(`確定要刪除「${obj.name}」的檔案嗎？這動作無法復原！`)) {
            deleteObject(id);
            showPage('page-list');
            renderList();
            showAlert('🗑️ 已刪除檔案');
        }
    });
}


// ===== 11. 清醒事件（彈窗） =====

document.getElementById('btn-wake-cancel').addEventListener('click', function() {
    document.getElementById('modal-wake').classList.add('hidden');
});

document.getElementById('btn-wake-confirm').addEventListener('click', function() {
    const content = document.getElementById('input-wake').value.trim();
    if (!content) {
        showAlert('⚠️ 寫點什麼吧，不然怎麼知道你清醒了？');
        return;
    }
    if (!currentDetailId) return;
    const obj = getObject(currentDetailId);
    if (!obj) return;

    const newEvent = { date: new Date().toISOString(), content: content };
    obj.wakeEvents.push(newEvent);
    updateObject(currentDetailId, { wakeEvents: obj.wakeEvents });
    document.getElementById('modal-wake').classList.add('hidden');
    renderDetail(currentDetailId);
    showAlert('💡 已記錄清醒事件！你離岸邊又近了一步。');
});


// ===== 12. 結案（彈窗） =====

document.getElementById('btn-close-cancel').addEventListener('click', function() {
    document.getElementById('modal-close').classList.add('hidden');
});

document.getElementById('btn-close-confirm').addEventListener('click', function() {
    if (!currentDetailId) return;
    const reason = document.getElementById('input-close-reason').value.trim();

    const obj = getObject(currentDetailId);
    if (!obj) return;

    updateObject(currentDetailId, {
        status: 'closed',
        closedAt: new Date().toISOString(),
        closeReason: reason || '未填寫'
    });

    document.getElementById('modal-close').classList.add('hidden');

    const msg = randomPick(CLOSE_MESSAGES);
    showAlert(msg);

    renderDetail(currentDetailId);
    renderList();
});


// ===== 13. 測驗頁面 =====

let quizState = {
    objectId: null,
    allQuestions: [],
    currentIndex: 0,
    answers: [],
    previousScore: null
};

document.getElementById('btn-quiz-back').addEventListener('click', function() {
    showPage('page-detail');
    if (currentDetailId) renderDetail(currentDetailId);
});

function startQuiz(objectId) {
    const obj = getObject(objectId);
    if (!obj) return;
    if (obj.status === 'closed') {
        showAlert('⚠️ 已結案的對象不能再做測驗喔！');
        return;
    }

    const questions = getRandomQuestions(QUESTION_BANK, 15);
    const previousScore = obj.records && obj.records.length > 0 ? obj.records[obj.records.length - 1].score : null;

    quizState = {
        objectId: objectId,
        allQuestions: questions,
        currentIndex: 0,
        answers: questions.map(() => ({ score: null, answered: false })),
        previousScore: previousScore
    };

    showPage('page-quiz');
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const { allQuestions, currentIndex, answers } = quizState;

    if (currentIndex >= allQuestions.length) {
        finishQuiz();
        return;
    }

    const q = allQuestions[currentIndex];
    const container = document.getElementById('quiz-content');

    const answeredCount = answers.filter(a => a.answered === true).length;

    let html = `
        <div class="quiz-progress">第 ${currentIndex + 1} / ${allQuestions.length} 題 ｜ 已答 ${answeredCount} 題</div>
        <div class="quiz-question">
            <div class="q-text">${q.text}</div>
            <div class="quiz-options">
    `;

    const selectedScore = answers[currentIndex].score;

    q.options.forEach((opt, i) => {
        const scoreVal = q.scores[i];
        let btnClass = 'quiz-option';
        if (selectedScore === scoreVal) {
            if (i === 0) btnClass += ' selected-low';
            else if (i === 1) btnClass += ' selected-mid';
            else btnClass += ' selected-high';
        }
        html += `
            <button class="${btnClass}" data-score="${scoreVal}">
                ${opt}
            </button>
        `;
    });

    html += `
            </div>
            <div style="display:flex;justify-content:space-between;margin-top:16px;gap:12px;flex-wrap:wrap;">
                <button id="btn-back-question" style="background:#ede8e1;flex:1;">← 返回</button>
                <button id="btn-skip-question" style="background:transparent;color:#b8ab9e;text-decoration:underline;flex:1;">⏭️ 跳過</button>
            </div>
        </div>
    `;

    container.innerHTML = html;

    const backBtn = document.getElementById('btn-back-question');
    if (currentIndex === 0) {
        backBtn.disabled = true;
        backBtn.style.opacity = '0.4';
        backBtn.style.cursor = 'not-allowed';
    } else {
        backBtn.disabled = false;
        backBtn.style.opacity = '1';
        backBtn.style.cursor = 'pointer';
    }

    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const score = parseInt(this.dataset.score);
            quizState.answers[quizState.currentIndex] = { score: score, answered: true };
            quizState.currentIndex++;
            renderQuizQuestion();
        });
    });

    document.getElementById('btn-back-question').addEventListener('click', function() {
        if (quizState.currentIndex > 0) {
            quizState.currentIndex--;
            renderQuizQuestion();
        }
    });

    document.getElementById('btn-skip-question').addEventListener('click', function() {
        quizState.answers[quizState.currentIndex] = { score: null, answered: false };
        
        const usedIds = quizState.allQuestions.map(q => q.id);
        const available = QUESTION_BANK.filter(q => !usedIds.includes(q.id));
        
        if (available.length > 0) {
            const newQ = randomPick(available);
            quizState.allQuestions[quizState.currentIndex] = newQ;
            quizState.answers[quizState.currentIndex] = { score: null, answered: false };
            renderQuizQuestion();
        } else {
            quizState.currentIndex++;
            renderQuizQuestion();
        }
    });
}

function finishQuiz() {
    const { objectId, answers, previousScore } = quizState;
    const validAnswers = answers.filter(a => a.answered === true);

    if (validAnswers.length === 0) {
        showAlert('🤣 你全部跳過，是在測心酸的喔？');
        showPage('page-detail');
        if (currentDetailId) renderDetail(currentDetailId);
        return;
    }

    const totalScore = validAnswers.reduce((sum, a) => sum + a.score, 0);
    const maxScore = validAnswers.length * 2;
    const finalScore = Math.round((totalScore / maxScore) * 100);

    const obj = getObject(objectId);
    if (obj) {
        obj.records.push({
            date: new Date().toISOString(),
            score: finalScore,
            totalQuestions: validAnswers.length
        });
        updateObject(objectId, { records: obj.records });
    }

    if (previousScore !== null) {
        const alertMsg = getTrendAlert(finalScore, previousScore);
        if (alertMsg) showAlert(alertMsg);
    } else {
        showAlert(`📊 首次測驗！暈船指數 ${finalScore} 分，記住這個數字，下次看看是沉還是醒。`);
    }

    showPage('page-detail');
    if (currentDetailId) renderDetail(currentDetailId);
    renderList();
}


// ===== 14. 初始化 =====

renderList();

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.add('hidden');
        }
    });
});

console.log('🚢 暈船仔拯救器已啟動！');
console.log('💡 資料存在 localStorage，清除瀏覽器資料就會消失喔。');