import { SnapType } from "./snap-type.type";
export class FaceSnap 
{
    title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    imageUrl: string;
    location?: string;
    id: string;

    constructor(title: string, description: string, createdDate: Date, snaps: number, imageUrl: string,)
    {
        this.id = crypto.randomUUID().substring(0, 8);
        this.title = title
        this.description = description
        this.createdDate = createdDate
        this.snaps = snaps
        this.imageUrl = imageUrl
    }

    addSnap(): void
    {
        this.snaps++;
    }
    removeSnap(): void
    {
        this.snaps--;
    }

    setlocation(location: string): void
    {
        this.location = location
    }
    withLocation(location: string): FaceSnap {
        this.setlocation(location);
        return this;
      }

      snap(snapType: SnapType) {
        if (snapType === 'snap') {
          this.addSnap();
        } else if (snapType === 'unsnap') {
          this.removeSnap();
        }
    }
}