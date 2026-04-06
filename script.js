(function () {
  const tracked = document.querySelectorAll("[data-track]");

  function sendAnalytics(label, href) {
    if (window.plausible) {
      window.plausible("link_click", {
        props: {
          link_name: label,
          link_href: href
        }
      });
    }

    if (window.gtag) {
      window.gtag("event", "link_click", {
        link_name: label,
        link_href: href
      });
    }
  }

  tracked.forEach((item) => {
    item.addEventListener("click", () => {
      const label = item.dataset.track || "unknown";
      const href = item.getAttribute("href") || "";
      sendAnalytics(label, href);
    });
  });
})();