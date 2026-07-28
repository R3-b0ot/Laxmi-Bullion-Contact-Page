(function () {
  var playStoreUrl = "https://play.google.com/store/apps/details?id=com.chirayusoft.shubhlaxmijewellers&hl=en_IN";
  var appStoreUrl = "https://apps.apple.com/in/app/shubhlaxmi-jewellers/id1578511201";
  var downloadRow = document.getElementById("download-row");
  var downloadLink = document.getElementById("download-link");
  var fallbackRow = document.getElementById("download-fallback");

  if (!downloadRow || !downloadLink || !fallbackRow) {
    return;
  }

  function showDownload(url, label, title) {
    downloadLink.href = url;
    downloadLink.textContent = label;
    downloadLink.title = title;
    downloadRow.hidden = false;
    fallbackRow.hidden = true;
  }

  function showFallback() {
    downloadRow.hidden = true;
    fallbackRow.hidden = false;
  }

  // Try synchronous low-entropy UA Client Hints first (Chromium 90+)
  if (navigator.userAgentData) {
    var isMobile = navigator.userAgentData.mobile;
    var platform = (navigator.userAgentData.platform || "").toLowerCase();

    if (isMobile && platform === "android") {
      showDownload(
        playStoreUrl,
        "Shubhlaxmi Jewellers \u2013 Apps on Google Play",
        "Open Shubhlaxmi Jewellers on Google Play"
      );
      return;
    }

    if (platform === "ios" || platform === "macos") {
      showDownload(
        appStoreUrl,
        "Shubhlaxmi Jewellers App \u2013 App Store",
        "Open Shubhlaxmi Jewellers App on the App Store"
      );
      return;
    }

    // Chromium on non-mobile/desktop — show fallback
    showFallback();
    return;
  }

  // Fallback for Safari, Firefox, older browsers
  var ua = navigator.userAgent || "";
  var isAndroid = /Android/i.test(ua);
  var isIOS = /iPhone|iPad|iPod/i.test(ua);
  var isIPadOS = /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1;

  if (isAndroid) {
    showDownload(
      playStoreUrl,
      "Shubhlaxmi Jewellers \u2013 Apps on Google Play",
      "Open Shubhlaxmi Jewellers on Google Play"
    );
  } else if (isIOS || isIPadOS) {
    showDownload(
      appStoreUrl,
      "Shubhlaxmi Jewellers App \u2013 App Store",
      "Open Shubhlaxmi Jewellers App on the App Store"
    );
  } else {
    showFallback();
  }
})();
