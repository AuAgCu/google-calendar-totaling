function callender() {
  const cal = CalendarApp.getCalendarById(
    "ここにgoogleカレンダーのIDを入れます"
  );

  // カレンダーのイベントの期間を指定
  const startTime = new Date("2023/04/01 00:00:00");
  const endTime = new Date("2023/05/01 00:00:00");
  const event = cal.getEvents(startTime, endTime);
  const map = {};

  // イベントを集計
  for (let i = 0; i < event.length; i++) {
    if (!(event[i].getTitle() in map)) {
      map[event[i].getTitle()] = 0;
    }

    const eventStartTime = event[i].getStartTime();
    const eventEndTime = event[i].getEndTime();
    map[event[i].getTitle()] +=
      (eventEndTime - eventStartTime) / 60.0 / 60 / 1000;
  }

  // 集計したものをlogに出す
  for (var k in map) {
    console.log(k, map[k]);
  }
}
