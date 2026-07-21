import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getDevServerConfig = (isDev) => isDev ? {
    devServer: {
        open: true,
        hot: true,
        port: 8080
    }
} : {}

export default ({ develop }) => ({
    mode: develop ? "development" : "production",
    entry: path.resolve(__dirname, "./src/index.js"),
    devtool: false,
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "bundle.js",
        assetModuleFilename: 'images/[hash][ext][query]', // при asset/inline не актуальна запись, картинки в коде будут
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/content.html"),
            filename: "content.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/contacts.html"),
            filename: "contacts.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/about.html"),
            filename: "about.html",
        }),
        new MiniCssExtractPlugin({
            filename: "./styles/main.css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|MP4|mp4)$/i,
                type: 'asset/resource', // наши  картинки как отдельный файл
                // type: 'asset/inline', // наши  картинки как base64 строчка
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i, // добавляет картинки в файле в сборку
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: [
                    // 'style-loader', - не нужен, так как избавляемся от JS-ных стилей
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.scss$/i,
                // сначала sass-loader в css-loader, и оттуда уже файлик появится где надо
                use: [
                    // 'style-loader', - не нужен, так как избавляемся от JS-ных стилей
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'sass-loader'
                ],
            }
        ]
    },
    ...getDevServerConfig(develop),
});
