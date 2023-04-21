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
  { id: '0', title: 'Xpire', tag: 'App Dev', img: xpireImg },
  { id: '1', title: 'PetSaver', tag: 'UI/UX Design', img: petSaverImg },
  { id: '2', title: 'SafeSpace', tag: 'Virtual Reality', img: safeSpaceImg },
  { id: '3', title: 'Project Kampong', tag: 'Web Dev', img: projectKampongImg },
  { id: '4', title: 'Digital Kampung', tag: 'Web Dev', img: digitalKampungImg },
  { id: '5', title: 'CULLinary', tag: 'Game Dev', img: cullinaryGif },
  { id: '6', title: 'CULLinary 2', tag: 'Game Dev', img: cullinaryTwoGif },
].reverse();

export const projectsObj: { [id: string]: ProjectInfo } = projects.reduce(
  (prevValue, currValue) => ((prevValue[currValue.id] = currValue), prevValue),
  {} as Record<string, ProjectInfo>,
);

console.log(projectsObj);
