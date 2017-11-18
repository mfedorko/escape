import {Component, Input} from '@angular/core';
import {ITimer} from './itimer';
 
 
@Component({
    selector: 'timer',
    templateUrl: 'timer.html'
})
export class TimerComponent {
 
    @Input() timeInSeconds: number;
    public timer: ITimer;
    public now: Date;
    public tick: Date;
    public dif : number;
    constructor() {
    }
 
    ngOnInit() {
        this.initTimer();
        
        
    }
 
    hasFinished() {
        return this.timer.hasFinished;
    }
    prolongTime(time){
        this.dif = this.now.getTime()-(time*1000) ;
    
        this.pauseTimer();
        this.now.setTime(this.dif);
        this.resumeTimer();
      }
    initTimer() {
        if(!this.timeInSeconds) { this.timeInSeconds = 0; }
 
        this.timer = <ITimer>{
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
           
        };
 
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    }
 
    startTimer() {
        
        this.timer.runTimer = true;
        this.now= new Date();
        this.now.setTime(new Date().getTime() - (this.timer.secondsRemaining*1000));
        if (! this.timer.hasStarted)
        this.timerTick();
        this.timer.hasStarted = true;
        
    }
 
    pauseTimer() {
        this.timer.runTimer = false;
    }
 
    resumeTimer() {
        this.timer.runTimer = true;
        //this.startTimer();
    }
 
    timerTick() {
        setTimeout(() => {
            this.tick = new Date();
            if (!this.timer.runTimer) { return; }
            this.timer.secondsRemaining=(this.tick.getTime() - this.now.getTime())/1000;
          //  this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            if (this.timer.secondsRemaining > 0) {
                this.timerTick();
            }
            else {
                this.timer.hasFinished = true;
            }
        }, 1000);
    }
 
    getSecondsAsDigitalClock(inputSeconds: number) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    }
    getSecondsRemaining(){
        return this.timer.secondsRemaining;
    }
    setRunTimer(val:boolean){
        this.timer.runTimer=val;

    }
}