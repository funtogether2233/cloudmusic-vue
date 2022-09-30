<template>
  <div>
    <audio
      @canplay="getDuration"
      controls
      @timeupdate="updateTime"
      v-show="false"
      ref="audio"
    >
      <!-- :src="audioSrc" -->
      <source src="../assets/audio/morning.mp3" />
    </audio>
    <div class="card">
      <div class="option">
        <div class="pre">
          <!-- 快退 -->
          <el-icon size="12px" color="#333333"><ArrowLeft /></el-icon>
        </div>
        <div class="play" @click="handlePauseOrPlay">
          <el-icon size="36px" color="#333333">
            <video-pause v-show="!paused" />
            <video-play v-show="paused" />
          </el-icon>
        </div>
        <div class="next">
          <!-- 快进 -->
          <el-icon size="12px" color="#333333"><ArrowRight /></el-icon>
        </div>
      </div>
      <div class="progress-bar">
        <div class="time startTime">{{ currentDuration }}</div>
        <div
          class="progress"
          ref="progress"
          @click="clickProgress"
          @mouseup="handleMouseup"
        >
          <div class="currentProgress" ref="currentProgress">
            <span
              class="circle"
              ref="circle"
              @mousedown="handleMousedown"
            ></span>
          </div>
        </div>
        <div class="time endTime">{{ duration }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { VideoPause, VideoPlay } from "@element-plus/icons-vue";
export default {
  name: "AudioPlayer",
  components: { VideoPause, VideoPlay },
  //   props: {
  //     audioSrc: {
  //       type: String,
  //       default: "../assets/morning.mp3",
  //     },
  //   },
  data() {
    return {
      duration: "00:00",
      currentDuration: "00:00",
      audio: "",
      paused: true,
      isMoveIn: false, //是否在移动中
      //   audioSrc: "../assets/morning.mp3",
    };
  },
  methods: {
    //暂停或播放
    handlePauseOrPlay() {
      this.audio.paused ? this.audio.play() : this.audio.pause();
      this.paused = !this.paused;
    },
    //视频在可以播放时触发
    getDuration() {
      this.duration = this.timeFormat(this.$refs.audio.duration);
      this.audio = this.$refs.audio;
    },
    //将单位为秒的的时间转换成mm:ss的形式
    timeFormat(number) {
      let minute = parseInt(number / 60);
      let second = parseInt(number % 60);
      minute = minute >= 10 ? minute : "0" + minute;
      second = second >= 10 ? second : "0" + second;
      return minute + ":" + second;
    },
    //进度条发生变化时触发
    updateTime() {
      if (!this.$refs.progress) return;
      this.currentDuration = this.timeFormat(this.audio.currentTime);
      //如果不是正在移动 和 没有暂停播放就执行
      if (!this.isMoveIn || !this.audio.paused) {
        // 设置当前时间
        let MoveX =
          this.$refs.progress.clientWidth *
          (this.audio.currentTime / this.audio.duration);
        //播放时更新距离
        this.$refs.currentProgress.style.width = MoveX + "px";
        this.$refs.circle.style.left =
          MoveX - this.$refs.circle.clientWidth / 2 + "px";
      }
    },
    //点击进度条更新进度
    clickProgress(e) {
      //如果不是正在移动 和 没有暂停播放就执行
      if (!this.isMoveIn || !this.audio.paused) {
        this.updateProgress(e.offsetX);
      }
    },
    //更新进度
    updateProgress(MoveX) {
      //当前移动的位置 = 当前移动的位置 / 当前进度条的可视长度    //this.$refs.progress.clientWidth 注意一定要拿总长度 否则会拿进度条已经走过的长度
      let clickProgress = MoveX / this.$refs.progress.clientWidth;
      //设置播放的时间 = 总时长 * 当前点击的长度
      this.audio.currentTime = this.audio.duration * clickProgress;
      //设置移动的位置
      this.$refs.currentProgress.style.width = MoveX + "px";
      this.$refs.circle.style.left =
        MoveX - this.$refs.circle.clientWidth / 2 + "px";
    },
    //鼠标弹起
    handleMouseup() {
      setTimeout(() => {
        this.audio.play();
        this.paused = false;
        this.isMoveIn = false;
      }, 200);
    },
    //小圆圈按下
    handleMousedown() {
      this.audio.pause();
      this.paused = true;
      this.isMoveIn = true;
      let progress = this.$refs.progress;
      //进度条 左 边距离页面左边的距离 移动最小值
      let moveMin = progress.offsetParent.offsetLeft + progress.offsetLeft;
      //进度条 右 边距离页面左边的距离 移动最大值
      let moveMax =
        progress.offsetParent.offsetLeft +
        progress.offsetLeft +
        progress.clientWidth;
      //小圆圈的宽度
      let circleWidth = this.$refs.circle.clientWidth / 2;
      let move = (move) => {
        if (move.pageX >= moveMax) {
          return;
        } else if (move.pageX <= moveMin) {
          return;
        }
        this.$refs.circle.style.left =
          move.pageX - moveMin - circleWidth + "px";
        this.updateProgress(move.pageX - moveMin);
      };
      //获取当前鼠标的位置 X
      document.addEventListener("mousemove", move);
      //鼠标弹起来
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", move);
      });
    },
  },
};
</script>
<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
}
.card {
  box-sizing: border-box;
  .option {
    .flex();
    justify-content: center;
    .play,
    .pre,
    .next {
      .flex();
      margin: 0 16px;
      cursor: pointer;
    }
  }
  .progress-bar {
    .flex();
    justify-content: center;
    .progress {
      border-radius: 1px;
      height: 3px;
      width: 352px;
      background-color: #cecece;
      // cursor: pointer;
      .currentProgress {
        position: relative;
        border-radius: 3px;
        height: 100%;
        width: 0;
        background-color: #ff4e4e;
        .circle {
          position: absolute;
          visibility: hidden;
          border-radius: 50%;
          right: -5px;
          top: -2px;
          width: 9px;
          height: 9px;
          background-color: #ec4141;
        }
      }
    }
    .progress:hover {
      height: 5px;
      border-radius: 2px;
      .circle {
        visibility: initial;
      }
    }
    .time {
      margin: 0 6px;
      color: #cecece;
      font-size: 8px;
    }
  }
}
</style>
