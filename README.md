This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [SliceMachine](https://www.slicemachine.dev) from [Prismic CMS](https://prismic.io).

## Features

Several enhancements have been made to the codebase for improving developer experience. Currently supported features include:

- TypeScript (strict mode turned off)
- [Path aliasing](https://nextjs.org/docs/advanced-features/module-path-aliases) in `tsconfig.json`
- Client and server debugger configurations (VSCode)

### Caveats

Some outlying issues are being actively addressed by Prismic and open-source contributors to the SliceMachine project. Noteworthy problems likely to be encountered include:

- No support for [preview mode](https://nextjs.org/docs/advanced-features/preview-mode) in `getServerSideProps` and `getStaticProps`(see issue [here](https://github.com/prismicio/slice-machine/issues/68))
- Lack of proper [TypeScript definitions](https://github.com/prismicio/slice-machine/issues/72) for `next-slicezone` library.
- Path aliases not supported for custom `slices` directory locations

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [SliceMachine](https://www.slicemachine.dev) documentation

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
