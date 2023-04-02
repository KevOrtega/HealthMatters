declare module "cloudinary-react" {
	import * as React from "react";

	export interface ImageProps
		extends React.ImgHTMLAttributes<HTMLImageElement> {
		cloudName: string;
		publicId: string;
		width?: number | string;
		height?: number | string;
		crop?: string;
		gravity?: string;
		quality?: number | string;
	}

	export class Image extends React.Component<ImageProps, any> {}
}
