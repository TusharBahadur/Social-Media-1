import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: 'he1cfobc',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: true,
    token: 'skVMcxqeIfKNl4Tzy9O1RzfLchupG6IuTc5BrmTA7TkCJlhv1ZSGwVxpUiSBlaDFswrFN9Xl9TGDj5m2Qs0uXXMsDYGjiqNzJHvXROijTJRyUJUw9QMRbaPZQezIqixG87oSH2G7dFGcQLThaHz6KgU3MSPVCbQYxOCMVQptqjeSbEvZAYLK',

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);