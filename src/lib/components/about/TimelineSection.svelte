<script lang="ts">
  import { timelineInfo } from '$lib/constants/info';
</script>

<h1>My Timeline</h1>

<div class="item">
  <div id="timeline">
    <div class="timeline__line">
      {#each Object.entries(timelineInfo) as yearEntry}
        <section class="year">
          <h3>{yearEntry[0]}</h3>
          {#each yearEntry[1] as descEntry}
            <section>
              {#if descEntry.dateRange}
                <h4>{descEntry.dateRange}</h4>
              {/if}
              <ul>
                {#each descEntry.desc as desc}
                  <li>{desc}</li>
                {/each}
              </ul>
            </section>
          {/each}
        </section>
      {/each}
    </div>
  </div>
</div>

<style>
  div.item {
    display: flex;
    flex: auto;
    overflow-y: auto;
    padding: 0rem 1rem 0rem 1rem;
  }

  #timeline {
    position: relative;
    display: table;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
  }
  #timeline div:after {
    content: '';
    width: 2px;
    position: absolute;
    top: 0.5rem;
    bottom: 0rem;
    left: 60px;
    z-index: 1;
    background: var(--secondary-color);
  }
  #timeline h3 {
    position: -webkit-sticky;
    position: sticky;
    top: 5rem;
    color: #888;
    margin: 0;
    font-size: 1em;
    font-weight: 400;
  }
  @media (min-width: 62em) {
    #timeline h3 {
      font-size: 1.1em;
    }
  }
  #timeline section.year {
    position: relative;
  }
  #timeline section.year:first-child section {
    margin-top: -1.3em;
    padding-bottom: 0px;
  }
  #timeline section.year section {
    position: relative;
    padding-bottom: 1.25em;
    margin-bottom: 2.2em;
  }
  #timeline section.year section h4 {
    position: absolute;
    bottom: 0;
    font-size: 0.9em;
    font-weight: 700;
    line-height: 1.2em;
    margin: 0;
    padding: 0 0 0 89px;
    color: var(--font-color);
    font-style: italic;
  }
  @media (min-width: 62em) {
    #timeline section.year section h4 {
      font-size: 1em;
    }
  }
  #timeline section.year section ul {
    list-style-type: none;
    padding: 0 0 0 75px;
    margin: -1.35rem 0 1em;
    max-width: 32rem;
    font-size: 1em;
  }
  @media (min-width: 62em) {
    #timeline section.year section ul {
      font-size: 1.1em;
      padding: 0 0 0 81px;
    }
  }
  #timeline section.year section ul:last-child {
    margin-bottom: 0;
  }
  #timeline section.year section ul:first-of-type:after {
    content: '';
    width: 10px;
    height: 10px;
    background: var(--secondary-color);
    border: 2px solid var(--font-color);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    left: 54px;
    top: 3px;
    z-index: 2;
  }
  #timeline section.year section ul li {
    margin-left: 0.5rem;
  }
  #timeline section.year section ul li:before {
    content: '·';
    margin-left: -0.5rem;
    padding-right: 0.3rem;
  }
  #timeline section.year section ul li:not(:first-child) {
    margin-top: 0.5rem;
  }
</style>
