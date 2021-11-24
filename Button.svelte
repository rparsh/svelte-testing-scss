<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Clicked <span>{count} {count === 1 ? "time" : "times"}</span>
</button>

<style lang="scss">
  button {
    background: #ff3e00;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 2px;

    span {
      font-weight: bold;
    }
  }
</style>
