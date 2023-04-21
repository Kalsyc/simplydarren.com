import xpireImg from '$lib/assets/cards/xpire-img.png';
import petSaverImg from '$lib/assets/cards/petsaver-img.jpeg';
import safeSpaceImg from '$lib/assets/cards/safespace-img.png';
import projectKampongImg from '$lib/assets/cards/kampong-img.png';
import digitalKampungImg from '$lib/assets/cards/digitalkampung-img.png';
import cullinaryGif from '$lib/assets/cards/cullinary-gif.gif';
import cullinaryTwoGif from '$lib/assets/cards/cullinary2-gif.gif';

export interface ProjectInfo {
  id: string;
  title: string;
  tag: string;
  img: string;
}

export const projects: ProjectInfo[] = [
  { id: 'xpire', title: 'Xpire', tag: 'App Dev', img: xpireImg },
  { id: 'pet-saver', title: 'PetSaver', tag: 'UI/UX Design', img: petSaverImg },
  { id: 'safe-space', title: 'SafeSpace', tag: 'Virtual Reality', img: safeSpaceImg },
  { id: 'project-kampong', title: 'Project Kampong', tag: 'Web Dev', img: projectKampongImg },
  { id: 'digital-kampung', title: 'Digital Kampung', tag: 'Web Dev', img: digitalKampungImg },
  { id: 'cullinary', title: 'CULLinary', tag: 'Game Dev', img: cullinaryGif },
  { id: 'cullinary-2', title: 'CULLinary 2', tag: 'Game Dev', img: cullinaryTwoGif },
].reverse();

export const projectsObj: { [id: string]: ProjectInfo } = projects.reduce(
  (prevValue, currValue) => ((prevValue[currValue.id] = currValue), prevValue),
  {} as Record<string, ProjectInfo>,
);

console.log(projectsObj);
