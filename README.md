# DeepSeek Clone - AI Chat Application

## 📝 คำอธิบายโปรเจกต์

DeepSeek Clone เป็นแอปพลิเคชั่น AI Chat ที่พัฒนาด้วย Next.js ซึ่งจำลองการทำงานของ DeepSeek AI โดยใช้ API จาก DeepSeek และมีระบบการจัดการผู้ใช้ผ่าน Clerk Authentication

## ✨ ฟีเจอร์หลัก

- 💬 **Chat Interface** - อินเทอร์เฟซการสนทนาที่สวยงามและใช้งานง่าย
- 👤 **User Authentication** - ระบบเข้าสู่ระบบผ่าน Clerk
- 💾 **Chat History** - บันทึกประวัติการสนทนา
- 📝 **Chat Management** - สร้าง, แก้ไข, ลบ และเปลี่ยนชื่อแชท
- 📱 **Responsive Design** - รองรับการใช้งานบนมือถือและเดสก์ทอป
- 🔄 **Real-time Responses** - การตอบสนองแบบเรียลไทม์
- 📄 **Markdown Support** - รองรับการแสดงผล Markdown และ Code Highlighting

## 🛠 เทคโนโลยีที่ใช้

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Authentication**: Clerk
- **Database**: MongoDB (ผ่าน Mongoose)
- **AI API**: DeepSeek API
- **UI Components**: Custom components with Tailwind
- **State Management**: React Context API

## 📋 ความต้องการของระบบ

- Node.js 18+ 
- npm, yarn, pnpm หรือ bun
- MongoDB Database
- DeepSeek API Key
- Clerk Account

## ⚙️ การติดตั้งและตั้งค่า

### 1. Clone Repository

```bash
git clone [your-repo-url]
cd deepseek-clone
```

### 2. ติดตั้ง Dependencies

```bash
npm install
# หรือ
yarn install
# หรือ
pnpm install
# หรือ
bun install
```

### 3. ตั้งค่า Environment Variables

สร้างไฟล์ `.env.local` ในโฟลเดอร์หลัก:

```env
# DeepSeek API
DEEPSEEK_API_KEY=your_deepseek_api_key_here

# MongoDB
MONGODB_URL=your_mongodb_connection_string

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
SIGNING_SECRET=your_clerk_webhook_signing_secret

# Clerk URLs (สำหรับ Production)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 4. การได้ API Key และการตั้งค่าต่างๆ

#### 🔑 วิธีการได้ DeepSeek API Key

1. **ไปที่เว็บไซต์ DeepSeek**: [https://platform.deepseek.com](https://platform.deepseek.com)
2. **สมัครสมาชิก**: สร้างบัญชีใหม่หรือเข้าสู่ระบบ
3. **ไปที่ API Keys**: หลังจากเข้าสู่ระบบแล้ว ไปที่ส่วน "API Keys"
4. **สร้าง API Key ใหม่**: คลิก "Create API Key"
5. **Copy API Key**: คัดลอก API Key ที่ได้และเก็บไว้อย่างปลอดภัย

**💡 เกี่ยวกับ Credit:**
- DeepSeek ให้ฟรี credit สำหรับผู้ใช้ใหม่
- Credit จะใช้ตามการเรียกใช้ API
- สามารถเติม credit เพิ่มได้ผ่านระบบ Payment ของ DeepSeek

**📺 วิดีโอสอน**: [How to Get DeepSeek API Key](https://youtu.be/uJPa_18Zf1I?si=v9LIZOCI0RPbVteL)

#### 🔐 การตั้งค่า Clerk Authentication

1. **ไปที่**: [https://clerk.com](https://clerk.com)
2. **สร้างโปรเจกต์ใหม่**
3. **ได้ API Keys** จากหน้า Dashboard
4. **ตั้งค่า Webhook** สำหรับ User Events:
   - Endpoint URL: `https://your-domain.com/api/clerk`
   - Events: `user.created`, `user.updated`, `user.deleted`

#### 🗄️ การตั้งค่า MongoDB

1. **ใช้ MongoDB Atlas** (แนะนำ): [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. **สร้าง Cluster ใหม่**
3. **ได้ Connection String**
4. **อัพเดท IP Whitelist** ให้รวม IP ของเซิร์ฟเวอร์

### 5. รัน Development Server

```bash
npm run dev
# หรือ
yarn dev
# หรือ
pnpm dev
# หรือ
bun dev
```

เปิดเบราว์เซอร์และไปที่ [http://localhost:3000](http://localhost:3000)

## 📁 โครงสร้างโปรเจกต์

```
deepseek-clone/
├── app/
│   ├── api/
│   │   ├── chat/          # Chat API endpoints
│   │   └── clerk/         # Clerk webhook
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.jsx           # Main page
├── components/
│   ├── ChatLabel.jsx      # Chat list item
│   ├── Message.jsx        # Message component
│   ├── PromptBox.jsx      # Input component
│   └── Sidebar.jsx        # Sidebar component
├── config/
│   └── db.js              # Database connection
├── context/
│   └── Appcontext.jsx     # App state management
├── models/
│   ├── Chat.js            # Chat model
│   └── User.js            # User model
└── public/                # Static files
```

## 🚀 การ Deploy

### Vercel (แนะนำ)

1. Push code ไป GitHub
2. เชื่อมต่อ GitHub repo กับ Vercel
3. ตั้งค่า Environment Variables ใน Vercel
4. Deploy

### การตั้งค่าเพิ่มเติมสำหรับ Production

1. **อัพเดท Clerk Webhook URL** ให้เป็น production domain
2. **ตั้งค่า MongoDB IP Whitelist** สำหรับ production
3. **เช็ค Environment Variables** ทั้งหมด

## 🔧 การแก้ไขปัญหาที่พบบ่อย

### ❌ ปัญหาที่อาจพบ

1. **API Key ไม่ทำงาน**
   - ตรวจสอบว่า API Key ถูกต้อง
   - ตรวจสอบ credit balance ใน DeepSeek

2. **Database Connection Error**
   - ตรวจสอบ MongoDB URL
   - ตรวจสอบ IP Whitelist

3. **Authentication Error**
   - ตรวจสอบ Clerk API Keys
   - ตรวจสอบ Webhook configuration

### 🔍 การ Debug

เปิด Developer Console เพื่อดู error messages:

```bash
# ดู logs
npm run dev
```

## 📱 การใช้งาน

1. **เข้าสู่ระบบ**: ใช้ระบบ Authentication ของ Clerk
2. **เริ่มแชทใหม่**: คลิกปุ่ม "New Chat"
3. **ส่งข้อความ**: พิมพ์ข้อความใน input box และกด Enter
4. **จัดการแชท**: คลิกที่ ... เพื่อเปลี่ยนชื่อหรือลบแชท


**🎯 หมายเหตุ**: โปรเจกต์นี้เป็นเพียงการจำลองเพื่อการศึกษาและไม่มีความเกี่ยวข้องกับ DeepSeek AI อย่างเป็นทางการ
