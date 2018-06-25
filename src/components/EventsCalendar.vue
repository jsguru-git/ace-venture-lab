<template>
  <div class="events-calendar">
    <div style="padding: 10px 20px">
      <p class="subtitle">Events this month</p>
    </div>
    <div class="calendar">
      <div class="calendar-nav">
        <div class="calendar-nav-left">
          <button class="button is-text">
            <i class="fa fa-chevron-left"></i>
          </button>
        </div>
        <div>March 2017</div>
        <div class="calendar-nav-right">
          <button class="button is-text">
            <i class="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div class="calendar-container">
        <div class="calendar-header">
          <div class="calendar-date">Sun</div>
          <div class="calendar-date">Mon</div>
          <div class="calendar-date">Tue</div>
          <div class="calendar-date">Wed</div>
          <div class="calendar-date">Thu</div>
          <div class="calendar-date">Fri</div>
          <div class="calendar-date">Sat</div>
        </div>
        <div class="calendar-body">
          <div class="calendar-date is-disabled"><button class="date-item">26</button></div>
          <div class="calendar-date is-disabled"><button class="date-item">27</button></div>
          <div class="calendar-date is-disabled"><button class="date-item">28</button></div>
          <div class="calendar-date"><button class="date-item">1</button></div>
          <div class="calendar-date"><button class="date-item">2</button></div>
          <div class="calendar-date"><button class="date-item">3</button></div>
          <div class="calendar-date tooltip" data-tooltip="Today"><button class="date-item is-today">4</button></div>
          <div class="calendar-date tooltip" data-tooltip="Not available" disabled=""><button class="date-item">5</button></div>
          <div class="calendar-date"><button class="date-item">6</button></div>
          <div class="calendar-date"><button class="date-item">7</button></div>
          <div class="calendar-date tooltip" data-tooltip="You have appointments"><button class="date-item">8</button></div>
          <div class="calendar-date"><button class="date-item">9</button></div>
          <div class="calendar-date"><button class="date-item">10</button></div>
          <div class="calendar-date"><button class="date-item">11</button></div>
          <div class="calendar-date"><button class="date-item">12</button></div>
          <div class="calendar-date"><button class="date-item">13</button></div>
          <div class="calendar-date"><button class="date-item">14</button></div>
          <div class="calendar-date"><button class="date-item">15</button></div>
          <div class="calendar-date calendar-range range-start"><button class="date-item is-active">16</button></div>
          <div class="calendar-date calendar-range"><button class="date-item">17</button></div>
          <div class="calendar-date calendar-range"><button class="date-item">18</button></div>
          <div class="calendar-date calendar-range"><button class="date-item">19</button></div>
          <div class="calendar-date calendar-range range-end"><button class="date-item is-active">20</button></div>
          <div class="calendar-date"><button class="date-item">21</button></div>
          <div class="calendar-date"><button class="date-item">22</button></div>
          <div class="calendar-date"><button class="date-item">23</button></div>
          <div class="calendar-date"><button class="date-item">24</button></div>
          <div class="calendar-date"><button class="date-item">25</button></div>
          <div class="calendar-date"><button class="date-item">26</button></div>
          <div class="calendar-date"><button class="date-item">27</button></div>
          <div class="calendar-date"><button class="date-item">28</button></div>
          <div class="calendar-date"><button class="date-item">29</button></div>
          <div class="calendar-date"><button class="date-item">30</button></div>
          <div class="calendar-date"><button class="date-item">31</button></div>
          <div class="calendar-date is-disabled"><button class="date-item">1</button></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'events-calendar'
  }
</script>

<style lang="sass" scoped>
@import '../mq'
.calendar
  min-width: inherit
  max-width: inherit
.calendar .calendar-header,
.calendar .calendar-body
  padding: 0 0
.calendar-header
  background-color: #01c3a6
.calendar .calendar-header .calendar-date
  color: #ffffff
</style>