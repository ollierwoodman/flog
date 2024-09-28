type roll = {
  id: string;
  name: string;
  chineseName?: string;
  description: string;
  images: (image | null)[];
  camera?: camera;
  filmStock?: filmStock;
  developedDate?: Date;
  forewordPath: string;
  epiloguePath?: string;
  thumbnailPath?: string;
}

type image = {
  path: string;
  width: number;
  height: number;
  alt?: string;
  placeholderSrc?: string;
}

type camera = {
  brand: string;
  model: string;
  halfFrame?: boolean;
  notes?: string;
}

type filmStock = {
  brand: string;
  model: string;
  speed: number; // ISO speed
  notes?: string;
}