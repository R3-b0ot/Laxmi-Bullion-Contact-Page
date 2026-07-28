(function () {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.chirayusoft.shubhlaxmijewellers&hl=en_IN";
  const appStoreUrl = "https://apps.apple.com/in/app/shubhlaxmi-jewellers/id1578511201";
  const downloadRow = document.getElementById("download-row");
  const downloadLink = document.getElementById("download-link");
  const fallbackRow = document.getElementById("download-fallback");

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

  // Modern detection via User-Agent Client Hints (Chromium 90+)
  if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
    navigator.userAgentData
      .getHighEntropyValues(["platform", "platformVersion"])
      .then(function (ua) {
        var platform = (ua.platform || "").toLowerCase();

        if (platform === "android") {
          showDownload(
            playStoreUrl,
            "Shubhlaxmi Jewellers \u2013 Apps on Google Play",
            "Open Shubhlaxmi Jewellers on Google Play"
          );
        } else if (platform === "ios" || platform === "macos") {
          showDownload(
            appStoreUrl,
            "Shubhlaxmi Jewellers App \u2013 App Store",
            "Open Shubhlaxmi Jewellers App on the App Store"
          );
        } else {
          showFallback();
        }
      })
      .catch(function () {
        detectViaUAString();
    });
    return;
  }

  // Fallback for Safari, Firefox, older browsers
  function detectViaUAString() {
    var ua = navigator.userAgent || "";
    var isAndroid = /Android/i.test(ua);
    var isIOS = /iPhone|iPad|iPod/i.test(ua);
    // iPad on iPadOS 13+ reports as Mac; check maxTouchPoints
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
  }

  detectViaUAString();
})();
