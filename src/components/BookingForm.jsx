import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, CheckCircle } from "lucide-react";

const grades = ["K", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"];
const subjects = [
  "SAT Math", "SAT Reading & Writing", "Math 1", "Math 2", "Math 3",
  "Precalculus", "Calculus AB", "Calculus BC", "Biology",
  "K-8 General Academic Support", "Application Support"
];

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    student_name: "",
    parent_name: "",
    email: "",
    phone: "",
    grade_level: "",
    subject: "",
    session_type: "",
    format: "",
    goals: "",
    availability: "",
  });
  const { toast } = useToast();

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.student_name || !form.email || !form.grade_level || !form.subject || !form.session_type) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      await fetch("https://formspree.io/f/xnjoozdn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
      toast({ title: "Request submitted!", variant: "default" });
    } catch (err) {
      console.error(err);
      toast({ title: "Error submitting form", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-3">Request Submitted!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you! We'll review your request and get back to you within 24 hours to schedule your session.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label>Student Name *</Label>
          <Input value={form.student_name} onChange={(e) => update("student_name", e.target.value)} placeholder="Student's full name" />
        </div>
        <div className="space-y-2">
          <Label>Parent/Guardian Name</Label>
          <Input value={form.parent_name} onChange={(e) => update("parent_name", e.target.value)} placeholder="Parent or guardian" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label>Email *</Label>
          <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="email@example.com" />
        </div>
        <div className="space-y-2">
          <Label>Phone</Label>
          <Input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(xxx) xxx-xxxx" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label>Grade Level *</Label>
          <Select value={form.grade_level} onValueChange={(v) => update("grade_level", v)}>
            <SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger>
            <SelectContent>
              {grades.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Subject *</Label>
          <Select value={form.subject} onValueChange={(v) => update("subject", v)}>
            <SelectTrigger><SelectValue placeholder="Select subject" /></SelectTrigger>
            <SelectContent>
              {subjects.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label>Session Type *</Label>
          <Select value={form.session_type} onValueChange={(v) => update("session_type", v)}>
            <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="One-on-One">One-on-One</SelectItem>
              <SelectItem value="Group Session">Group Session</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Format</Label>
          <Select value={form.format} onValueChange={(v) => update("format", v)}>
            <SelectTrigger><SelectValue placeholder="Select format" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="In-Person">In-Person</SelectItem>
              <SelectItem value="Online">Online</SelectItem>
              <SelectItem value="No Preference">No Preference</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Goals & Notes</Label>
        <Textarea value={form.goals} onChange={(e) => update("goals", e.target.value)} placeholder="Describe your student's goals, areas they need help with, or anything else we should know..." rows={3} />
      </div>

      <div className="space-y-2">
        <Label>Availability</Label>
        <Textarea value={form.availability} onChange={(e) => update("availability", e.target.value)} placeholder="What days and times work best? (e.g., Weekdays after 4pm, Saturday mornings)" rows={2} />
      </div>

      <p className="text-xs text-muted-foreground">
        * Tutors are assigned internally. Students do not select tutors.
      </p>

      <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 text-base">
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Request"}
      </Button>
    </form>
  );
}