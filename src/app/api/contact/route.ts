import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, businessName, businessType, challenges, requestAudit } = body;

    // Basic validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Please provide your name.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!challenges || typeof challenges !== 'string' || challenges.trim().length === 0) {
      return NextResponse.json({ error: 'Please describe your business or what you would like to simplify.' }, { status: 400 });
    }

    // In production, dispatch notification via configured SMTP / service
    // Logs for audit trail
    console.log('[Oakins New Inquiry Received]', {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || 'N/A',
      businessName: businessName?.trim() || 'N/A',
      businessType: businessType || 'Unspecified',
      requestAudit: Boolean(requestAudit),
      challenges: challenges.trim(),
      timestamp: new Date().toISOString(),
    });

    // Check if external SMTP / webhook is configured
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            businessName,
            businessType,
            requestAudit,
            challenges,
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch (webhookErr) {
        console.error('[Oakins Webhook Error]', webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: requestAudit
        ? 'Thank you! We received your details and will prepare your 3 practical recommendations within 1 business day.'
        : 'Thank you for reaching out! We have received your message and will get back to you promptly.',
    });
  } catch (err) {
    console.error('[Oakins Contact API Error]', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request. Please message us on WhatsApp directly.' },
      { status: 500 }
    );
  }
}
