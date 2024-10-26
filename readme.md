1. Content Security Policy (CSP)

Purpose: CSP helps prevent various types of attacks, including Cross-Site Scripting (XSS) and data injection attacks by controlling the resources (scripts, styles, images, etc.) the browser is allowed to load.

<code>
res.setHeader("Content-Security-Policy", "default-src 'self'; img-src https://example.com; script-src 'self' https://apis.example.com");

</code>

- default-src 'self': Only allows resources from the same origin.
- img-src https://example.com: Allows images from https://example.com.
- script-src 'self' https://apis.example.com: Allows scripts from the same origin and https://apis.example.com.

2. Strict-Transport-Security (HSTS)

Purpose: HSTS instructs browsers to only connect to your site using HTTPS, protecting against man-in-the-middle attacks and protocol downgrade attacks.

<code>
res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
</code>

- max-age=31536000: Tells the browser to remember to use HTTPS for the next year (31,536,000 seconds).
- includeSubDomains: Applies the rule to all subdomains.
- preload: Indicates that the domain should be included in the HSTS preload list, which is a list maintained by browsers to enforce HTTPS.

3. X-Content-Type-Options

Purpose: Prevents browsers from MIME-sniffing a response away from the declared content type, which helps to reduce the risk of drive-by downloads and similar attacks.

<code>
res.setHeader("X-Content-Type-Options", "nosniff");
</code>

- nosniff: Forces the browser to respect the MIME type declared by the server.

4. X-Frame-Options
   Purpose: Protects against clickjacking by controlling whether your content can be displayed in a frame or iframe.

res.setHeader("X-Frame-Options", "DENY");

<code>
res.setHeader("X-Frame-Options", "DENY");
</code>

- DENY: Prevents any domain from displaying your content in a frame.
- Alternatively, you can use SAMEORIGIN to allow your content to be framed only by pages on the same origin.

5. X-XSS-Protection

Purpose: Enables the cross-site scripting (XSS) filter built into most browsers, providing an extra layer of protection against XSS attacks.

<code>
res.setHeader("X-XSS-Protection", "1; mode=block");
</code>

- 1; mode=block: Enables the XSS filter and tells the browser to block the response if an attack is detected.

6. Referrer-Policy
   Purpose: Controls how much referrer information is included with requests, which helps to maintain privacy.

<code>

res.setHeader("Referrer-Policy", "no-referrer-when-downgrade");
</code>

- no-referrer-when-downgrade: Sends the full URL in the Referer header when navigating to HTTPS but strips it to just the origin when navigating to HTTP.

7. Expect-CT
   Purpose: Instructs browsers to report Certificate Transparency issues and can enforce the requirement for Certificate Transparency.

Implementation Example:

<code>
res.setHeader("Expect-CT", 'max-age=86400, enforce, report-uri="https://example.com/report"');
</code>

- max-age=86400: The maximum time, in seconds, that the browser should cache the policy.
- enforce: Enforces the Certificate Transparency policy.
- report-uri="https://example.com/report": URL where violation reports should be sent.

8. Permissions-Policy
   Purpose: Controls which browser features and APIs can be used in the context of the website, helping to mitigate risks of abuse.

<code>
res.setHeader("Permissions-Policy", 'geolocation=(self "https://example.com"), microphone=()');

</code>

- geolocation=(self "https://example.com"): Allows geolocation only on the same origin and https://example.com.
- microphone=(): Disables the microphone feature.

9. Feature-Policy (Replaced by Permissions-Policy)

Purpose: This header was used to enable and disable certain browser features and APIs. It has been replaced by the Permissions-Policy header, but you might still see it in use.
<code>

res.setHeader("Feature-Policy", "geolocation 'self'; vibrate 'none'");
</code>

geolocation 'self': Only allows geolocation requests from the same origin.
vibrate 'none': Disables the vibration API.

10. Access-Control-Allow-Origin (CORS)

Purpose: Controls which origins are allowed to access resources on your server, mitigating risks of cross-origin requests.

<code>
res.setHeader("Access-Control-Allow-Origin", "https://example.com");
</code>

- Access-Control-Allow-Origin: \*: Allows all origins (use with caution).
- Access-Control-Allow-Origin: https://example.com: Only allows https://example.com to access resources. 

11. Access-Control-Allow-Methods

Purpose: Specifies the methods allowed when accessing the resource.

<code>
res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
</code>

- Allows only GET, POST, PUT, and DELETE methods.

12. Access-Control-Allow-Headers

Purpose: Indicates which headers can be used in the actual request.

<code>
res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
</code>

- Allows Content-Type and Authorization headers in the request.

13. Access-Control-Allow-Credentials
Purpose: Indicates whether the response to the request can be exposed when the credentials flag is true.

<code>
res.setHeader("Access-Control-Allow-Credentials", "true");
</code>

- Allows cookies to be sent with requests to the server.

14. Cache-Control
Purpose: Directs the caching mechanisms of both browsers and intermediate caches.

<code>
res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
</code>

- no-store: Prevents the browser and caches from storing any version of the response.
- no-cache: Forces caches to submit the request to the origin server for validation before releasing a cached copy.
- must-revalidate: Indicates that once a resource becomes stale, it must not be used to satisfy subsequent requests without successful validation on the origin server.
- proxy-revalidate: Same as must-revalidate, but only for shared caches (e.g., proxies).

15. Pragma

Purpose: Used for backwards compatibility with HTTP/1.0 caches.

<code>
res.setHeader("Pragma", "no-cache");
</code>

- no-cache: Forces caches to submit the request to the origin server for validation before releasing a cached copy.

16. Expires

Purpose: Provides an expiration date for the response, which allows caches to know when the content should no longer be considered fresh.

<code>
res.setHeader("Expires", "0");
</code>

- 0: Indicates that the resource has already expired.
