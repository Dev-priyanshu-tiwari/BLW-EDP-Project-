
## Run Locally
**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`



mongo - 
<div className="border border-slate-100 rounded-2xl p-4 bg-slate-50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase text-slate-400 font-mono tracking-wide">MongoDB Atlas</span>
              {mongoStatus?.status === "connected" ? (
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 animate-pulse"></span>
                </span>
              ) : mongoStatus?.status === "connecting" ? (
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 animate-pulse"></span>
                </span>
              ) : mongoStatus?.status === "error" ? (
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500 inline-block" title={mongoStatus?.error || "Error"}></span>
              ) : (
                <span className="h-2.5 w-2.5 rounded-full bg-slate-400 inline-block"></span>
              )}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-700">
                {mongoStatus?.status === "connected" ? "Cloud Connected" : mongoStatus?.status === "connecting" ? "Spinnning Up..." : mongoStatus?.status === "error" ? "Connection Error" : "In-Memory Sandbox"}
              </p>
              <p className="text-[9px] text-slate-400 font-mono tracking-normal leading-tight mt-0.5" title={mongoStatus?.error || undefined}>
                {mongoStatus?.status === "connected" 
                  ? `Db: ${mongoStatus.databaseName}`
                  : mongoStatus?.status === "error"
                    ? "Check credentials"
                    : "No Atlas URI defined"}
              </p>
            </div>
            {!mongoStatus?.uriConfigured && (
              <div className="pt-2 border-t border-slate-200/50">
                <p className="text-[8px] leading-relaxed text-slate-400 font-medium">
                  To stream live data, inject <code className="bg-slate-250/60 bg-gray-200 text-slate-600 px-1 py-0.5 rounded font-mono text-[8.5px] font-semibold select-all">MONGODB_URI</code> as secrets variable.
                </p>
              </div>
            )}
          </div>