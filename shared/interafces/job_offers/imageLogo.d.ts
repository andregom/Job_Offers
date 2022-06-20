export type ImgLogo = {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: { type: string; data: [Array<char>] };
    size: Number;
    required: false
};

export interface IImageLogo {
    imgLogo: ImgLogo;
}