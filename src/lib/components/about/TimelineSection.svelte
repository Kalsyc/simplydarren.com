<script lang="ts">
  interface TimelineInfo {
    [year: number]: DescInfo[];
  }

  interface DescInfo {
    desc: string[];
    dateRange: string;
  }

  const timelineInfo: TimelineInfo = {
    1997: [{ desc: ['Born in Singapore'], dateRange: '' }],
    2015: [{ desc: ['Graduated from  Nanyang Junior College'], dateRange: '' }],
    2016: [{ desc: ['Went for National Service for 2 years'], dateRange: 'February' }],
    2018: [
      {
        desc: ['ORD from National Service on 15 Feb 2018'],
        dateRange: 'February',
      },
      {
        desc: ['Began my undergraduate studies at National University of Singapore (NUS)'],
        dateRange: 'August',
      },
    ],
    2019: [
      {
        desc: [
          'Took on responsibilities as an Undergraduate Teaching Assistant (TA)',
          'Taught CS1010S/X, CS3240, CS4240 modules over 3 years with 100+ students under my charge in total',
        ],
        dateRange: 'January 2019 - May 2022',
      },
    ],
    2020: [
      {
        desc: ['Started at WaveScan Technologies Pte. Ltd. as a UI/UX Developer Intern'],
        dateRange: 'May 2020 - December 2020',
      },
    ],
    2021: [
      {
        desc: ['Joined STUCK Design Pte. Ltd. as a Full-Stack Developer Intern'],
        dateRange: 'May 2021 - September 2021',
      },
    ],
    2022: [
      {
        desc: [
          'Graduated from National University of Singapore with a CAP of 4.33/5.00',
          'Obtained my Bachelors of Computing in Computer Science with Honours (Distinction)',
        ],
        dateRange: 'May',
      },
      {
        desc: ['Joined back WaveScan Technologies Pte. Ltd. as a full-time Software Engineer'],
        dateRange: 'June 2022 - April 2023',
      },
    ],
    2023: [
      {
        desc: ['Started this website', 'Currently looking for roles in Software Engineering'],
        dateRange: 'April',
      },
    ],
  };
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
              <h4>{descEntry.dateRange}</h4>
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
