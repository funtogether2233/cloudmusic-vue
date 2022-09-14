<template>
  <div class="container">
    <audio
      @canplay="getDuration"
      controls
      @timeupdate="updateTime"
      v-show="false"
      ref="audio"
    >
      <!-- :src="audioSrc" -->
      <source src="../assets/morning.mp3" />
    </audio>
    <div class="card">
      <div class="option">
        <span class="pre">
          <!-- 快退 -->
          <el-icon size="12px"><ArrowLeft /></el-icon>
        </span>
        <span class="play" @click="handlePauseOrPlay">
          <el-icon size="35px" color="#3853FE">
            <video-pause v-show="!paused" />
            <video-play v-show="paused" />
          </el-icon>
        </span>
        <span class="next">
          <!-- 快进 -->
          <el-icon size="12px"><ArrowRight /></el-icon>
        </span>
      </div>
      <div
        class="progress"
        ref="progress"
        @click="clickProgress"
        @mouseup="handleMouseup"
      >
        <div class="currentProgress" ref="currentProgress">
          <span class="circle" ref="circle" @mousedown="handleMousedown"></span>
        </div>
      </div>
      <div class="time">
        <span class="startTime">{{ currentDuration }}</span>
        <span class="endTime">{{ duration }}</span>
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
.card {
  box-sizing: border-box;
  width: 300px;
  padding: 0 30px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.03);
  .option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    .play,
    .pre,
    .next {
      display: flex;
      padding: 0 2px;
      align-items: center;
      cursor: pointer;
    }
  }
  .progress {
    height: 7px;
    border-radius: 3px;
    width: 100%;
    background-color: #dadfea;
    cursor: pointer;

    .currentProgress {
      position: relative;
      height: 100%;
      width: 0;
      background-color: #3853fe;
      border-radius: 3px;

      .circle {
        position: absolute;
        right: -6px;
        top: -2px;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #3853fe;
        background-color: #fff;

        &:hover {
          width: 12px;
          height: 12px;
          top: -3px;
          border-radius: 50%;
        }
      }
    }
  }
  .time {
    display: flex;
    justify-content: space-between;
    color: #777a85;
    font-size: 12px;
  }
}
</style>
