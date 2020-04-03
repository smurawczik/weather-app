module.exports = data => {
  return `<script>
	${data ? "window.__INITIAL__ = " + JSON.stringify(data) + ";" : ""}
  </script>`;
};
