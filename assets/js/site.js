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
  const isAndroid = /Android/i.test(userAgent) || /Android/i.test(platform);
  const isAppleMobile = /iPhone|iPad|iPod/i.test(userAgent) || (/Mac/i.test(platform) && navigator.maxTouchPoints > 1);

  const fallbackRow = document.getElementById("download-fallback");

  if (!fallbackRow) {
    return;
  }

  if (isAndroid) {
    downloadLink.href = playStoreUrl;
    downloadLink.textContent = "Shubhlaxmi Jewellers – Apps on Google Play";
    downloadLink.title = "Open Shubhlaxmi Jewellers on Google Play";
    downloadRow.hidden = false;
    fallbackRow.hidden = true;
    return;
  }

  if (isAppleMobile) {
    downloadLink.href = appStoreUrl;
    downloadLink.textContent = "Shubhlaxmi Jewellers App - App Store";
    downloadLink.title = "Open Shubhlaxmi Jewellers App on the App Store";
    downloadRow.hidden = false;
    fallbackRow.hidden = true;
    return;
  }

  downloadRow.hidden = true;
  fallbackRow.hidden = false;
})();
