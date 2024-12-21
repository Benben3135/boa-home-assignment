"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var Shopify = require('shopify-api-node');
var shopify = new Shopify({
    shopName: process.env.SHOPIFY_STORE_URL,
    apiKey: process.env.SHOPIFY_API_KEY,
    password: process.env.ADMIN_API_TOKEN
});
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var products, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, shopify.product.list()];
                case 1:
                    products = _a.sent();
                    console.log(products);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
fetchProducts();
// import express, { Request, Response, NextFunction } from 'express';
// import { PrismaClient } from '@prisma/client';
// import CryptoJS from 'crypto-js';
// import cors from 'cors';
// const prisma = new PrismaClient();
// const app = express();
// app.use(express.json());
// // Middleware to handle preflight requests
// app.options('*', (req, res) => {
//   res.header('Access-Control-Allow-Origin', 'https://extensions.shopifycdn.com');
//   res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, X-Signature, X-Timestamp');
//   res.sendStatus(200);
// });
// // Add CORS headers
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://extensions.shopifycdn.com');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, X-Signature, X-Timestamp');
//   res.header('Access-Control-Allow-Credentials', 'true'); // If credentials are involved
//   next();
// });
// app.use(
//   cors({
//     origin: 'https://extensions.shopifycdn.com',
//     methods: ['GET', 'POST', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'X-Signature', 'X-Timestamp'],
//     credentials: true,
//   })
// );
// const validateShopifySignature = (query: any, sharedSecret: string): boolean => {
//   const { signature, ...rest } = query;
//   // Sort query parameters alphabetically and concatenate them
//   const sortedParams = Object.keys(rest).sort().map(key => `${key}=${rest[key]}`).join('&');
//   // Generate HMAC-SHA256 hash
//   const generatedSignature = CryptoJS.HmacSHA256(sortedParams, sharedSecret).toString(CryptoJS.enc.Hex);
//   return generatedSignature === signature;
// };
// // Verify Shopify session token
// const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     res.status(401).json({ error: 'Missing or invalid token' });
//     return;
//   }
//   // For now, we'll just validate the token exists
//   // In production, you would verify the token with Shopify
//   next();
// };
// interface CartItem {
//   variantId: string;
//   quantity: number;
// }
// interface SaveCartRequest extends Request {
//   body: {
//     items: CartItem[];
//     timestamp: string;
//   }
// }
// // Save cart endpoint
// app.post(
//   '/apps/boa-home-task-bv/',
//   verifyToken,
//   async (req: SaveCartRequest, res: Response): Promise<void> => {
//     try {
//       const sharedSecret = "fd8bd02ef3b2d45c5e79cc0b97f5a052";
//       const query = req.query;
//       // Validate the signature
//       const isValidSignature = validateShopifySignature(query, sharedSecret);
//       if (!isValidSignature) {
//         res.status(403).json({ error: 'Invalid signature' });
//         return;
//       }
//       const { items, timestamp } = req.body;
//       if (!Array.isArray(items)) {
//         res.status(400).json({
//           error: 'Invalid request: Items must be an array',
//         });
//         return;
//       }
//       const customerId = 'test-customer';
//       const shop = 'home-assignment-113.myshopify.com';
//       const savedCart = await prisma.savedCart.upsert({
//         where: {
//           customerId_shop: {
//             customerId,
//             shop,
//           },
//         },
//         update: {
//           items: JSON.stringify(items),
//           updatedAt: new Date(timestamp),
//         },
//         create: {
//           customerId,
//           shop,
//           items: JSON.stringify(items),
//         },
//       });
//       res.status(200).json({
//         success: true,
//         message: `Saved ${items.length} items to cart`,
//         cart: savedCart,
//       });
//     } catch (error) {
//       console.error('Save cart error:', error);
//       res.status(500).json({
//         error: error instanceof Error ? error.message : 'Unknown error',
//       });
//     }
//   }
// );
// const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8081;
// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Backend server is running on port ${PORT}`);
// });