const el = document.getElementById('announcement-banner');

if (el) {
  console.log(`Jira announcement removed by jira-banner-be-gone. \n\nAnnouncement: \n\n${el.innerText}`);
  el.remove();
}
