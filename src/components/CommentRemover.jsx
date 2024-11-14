import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check } from "lucide-react";

const CommentRemover = () => {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [copied, setCopied] = useState(false);

  const removeComments = (code) => {
    const strings = [];
    let stringIndex = 0;

    let processedCode = code.replace(
      /(["'`])(?:(?!\1|\\).|\\.)*?\1/g,
      (match) => {
        strings.push(match);
        return `___STRING_${stringIndex++}___`;
      }
    );

    processedCode = processedCode.replace(/\/\*[\s\S]*?\*\//g, "");
    processedCode = processedCode.replace(/\/\/.*/g, "");

    strings.forEach((str, index) => {
      processedCode = processedCode.replace(`___STRING_${index}___`, str);
    });

    processedCode = processedCode
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => line.replace(/\s+$/, ""))
      .join("\n");

    return processedCode;
  };

  const handleRemoveComments = () => {
    const cleaned = removeComments(inputCode);
    setOutputCode(cleaned);
  };

  const handleCopyToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.value = outputCode;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }

    document.body.removeChild(textArea);
  };

  const handleClear = () => {
    setInputCode("");
    setOutputCode("");
    setCopied(false);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>JavaScript Comment Remover</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Input Code:</label>
          <Textarea
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            className="h-64 font-mono bg-white"
            placeholder="Paste your JavaScript code here..."
          />
        </div>

        <div className="flex space-x-2">
          <Button
            onClick={handleRemoveComments}
            disabled={!inputCode}
            variant="default"
            className="px-6"
          >
            Remove Comments
          </Button>
          <Button
            onClick={handleClear}
            variant="outline"
            disabled={!inputCode && !outputCode}
            className="px-6"
          >
            Clear
          </Button>
        </div>

        {outputCode && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Output Code:</label>
            <Textarea
              value={outputCode}
              readOnly
              className="h-64 font-mono bg-muted"
            />
            <Button
              onClick={handleCopyToClipboard}
              variant="outline"
              className="gap-2 px-6"
              disabled={!outputCode}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy to Clipboard</span>
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CommentRemover;
