import { MaleAvatarOptions, FemaleAvatarOptions } from './avatar-options';

const randomItem = (array: any[]) =>
  array[Math.floor(Math.random() * array.length)];

export class Person {
  topType = '';
  accessoriesType = '';
  hatColor = '';
  hairColor = '';
  facialHairType = '';
  facialHairColor = '';
  clotheType = '';
  clotheColor = '';
  graphicType = '';
  eyeType = '';
  eyebrowType = '';
  mouthType = '';
  skinColor = '';
  gender: 'male' | 'female' = 'male';

  constructor() {
    this.generate();
  }

  get url() {
    return `https://avataaars.io/?${new URLSearchParams({
      avatarStyle: 'Transparent',
      // avatarStyle: 'Circle',
      topType: this.topType,
      accessoriesType: this.accessoriesType,
      hairColor: this.hairColor,
      facialHairType: this.facialHairType,
      facialHairColor: this.facialHairColor,
      clotheType: this.clotheType,
      clotheColor: this.clotheColor,
      graphicType: this.graphicType,
      eyeType: this.eyeType,
      eyebrowType: this.eyebrowType,
      mouthType: this.mouthType,
      skinColor: this.skinColor,
    })}`;
  }

  generate() {
    this.gender = randomItem(['male', 'female']);

    const options =
      this.gender === 'male' ? MaleAvatarOptions : FemaleAvatarOptions;

    this.topType = randomItem(options.topType);
    this.accessoriesType = randomItem(options.accessoriesType);
    this.hatColor = randomItem(options.hatColor);
    this.hairColor = randomItem(options.hairColor);
    this.facialHairType = randomItem(options.facialHairType);
    this.facialHairColor = this.hairColor;
    this.clotheType = randomItem(options.clotheType);
    this.clotheColor = randomItem(options.clotheColor);
    this.graphicType = randomItem(options.graphicType);
    this.eyeType = randomItem(options.eyeType);
    this.eyebrowType = randomItem(options.eyebrowType);
    this.mouthType = randomItem(options.mouthType);
    this.skinColor = randomItem(options.skinColor);
  }
}
