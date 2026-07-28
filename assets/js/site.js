(function () {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.chirayusoft.shubhlaxmijewellers&hl=en_IN";
  const appStoreUrl = "https://apps.apple.com/in/app/shubhlaxmi-jewellers/id1578511201";
  const downloadRow = document.getElementById("download-row");
  const downloadLink = document.getElementById("download-link");

  if (!downloadRow || !downloadLink) {
    return;
  }

  const userAgent = navigator.userAgent || "";
  const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "";
  const isAndroid = /Android/i.test(userAgent);
  const isAppleMobile = /iPhone|iPad|iPod/i.test(userAgent) || (/Mac/i.test(platform) && navigator.maxTouchPoints > 1);

  if (isAndroid) {
    downloadLink.href = playStoreUrl;
    downloadLink.textContent = "Google Play";
    downloadRow.hidden = false;
    return;
  }

  if (isAppleMobile) {
    downloadLink.href = appStoreUrl;
    downloadLink.textContent = "App Store";
    downloadRow.hidden = false;
    return;
  }

  downloadRow.hidden = true;
})();
