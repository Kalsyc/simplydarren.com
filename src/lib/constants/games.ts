export interface GameInfo {
  gameBuildLink: string;
  frameName: string;
  frameTitle: string;
  headTitle: string;
  id: string;
}

export const games: { [id: string]: GameInfo } = {
  CULLinary: {
    gameBuildLink: 'https://simplydarren-test.s3.ap-southeast-1.amazonaws.com/CULLinary_WebGL_Build_Prod/index.html',
    frameName: 'CULLinary',
    frameTitle: 'CULLinary',
    headTitle: 'CULLinary',
    id: 'CULLinary',
  },
  CULLinary2: {
    gameBuildLink: 'https://simplydarren-test.s3.ap-southeast-1.amazonaws.com/CULLv2_WebGLBuild_Prod/index.html',
    frameName: 'CULLinary 2',
    frameTitle: 'CULLinary 2',
    headTitle: 'CULLinary 2',
    id: 'CULLinary2',
  },
};
