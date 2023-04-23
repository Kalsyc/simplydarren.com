import xpireImg from '$lib/assets/cards/xpire-img.png';
import petSaverImg from '$lib/assets/cards/petsaver-img.jpeg';
import safeSpaceImg from '$lib/assets/cards/safespace-img.png';
import projectKampongImg from '$lib/assets/cards/kampong-img.png';
import digitalKampungImg from '$lib/assets/cards/digitalkampung-img.png';
import cullinaryVid from '$lib/assets/cards/cullinary-vid.mp4';
import cullinaryTwoVid from '$lib/assets/cards/cullinary2-vid.mp4';

export interface ProjectInfo {
  id: string;
  title: string;
  tag: string;
  img: string;
  isVid: boolean;
}

export const projects: ProjectInfo[] = [
  { id: 'xpire', title: 'Xpire', tag: 'App Dev', img: xpireImg, isVid: false },
  { id: 'pet-saver', title: 'PetSaver', tag: 'UI/UX Design', img: petSaverImg, isVid: false },
  { id: 'safe-space', title: 'SafeSpace', tag: 'Virtual Reality', img: safeSpaceImg, isVid: false },
  { id: 'project-kampong', title: 'Project Kampong', tag: 'Web Dev', img: projectKampongImg, isVid: false },
  { id: 'digital-kampung', title: 'Digital Kampung', tag: 'Web Dev', img: digitalKampungImg, isVid: false },
  { id: 'cullinary', title: 'CULLinary', tag: 'Game Dev', img: cullinaryVid, isVid: true },
  { id: 'cullinary-2', title: 'CULLinary 2', tag: 'Game Dev', img: cullinaryTwoVid, isVid: true },
].reverse();

export const projectsObj: { [id: string]: ProjectInfo } = projects.reduce(
  (prevValue, currValue) => ((prevValue[currValue.id] = currValue), prevValue),
  {} as Record<string, ProjectInfo>,
);
