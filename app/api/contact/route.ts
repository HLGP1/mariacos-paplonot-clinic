import { NextResponse } from 'next/server'; 
import { contactSchema } from '@/lib/validation'; 

  export async function POST(req: Request) 
    { try 
      { const body = await req.json(); 
        
      const parsed = contactSchema.safeParse(body); 
      
      if (!parsed.success) { 
        return NextResponse.json( 
          { message: parsed.error.issues[0]?.message || 'Invalid input' }, { status: 400 } ); } 
          
          // ✅ SAFE for production (replace later with DB/email) 
          console.log('CONTACT FORM:', parsed.data); 
          
          return NextResponse.json({ message: 'Message sent successfully' }); 
        } catch (e) { 
          return NextResponse.json({ message: 'Server error' }, { status: 500 }); 
        } 
      }